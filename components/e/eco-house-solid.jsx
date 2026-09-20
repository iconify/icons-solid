import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2nilsb3b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j2nilsb3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:eco-house-solid"} {...others} />);
}

export default Component;
