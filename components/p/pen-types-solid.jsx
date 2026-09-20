import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6bhd7jxe.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j6bhd7jxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:pen-types-solid"} {...others} />);
}

export default Component;
