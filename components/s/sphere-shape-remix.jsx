import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pfa8sx9at.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pfa8sx9at"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:sphere-shape-remix"} {...others} />);
}

export default Component;
