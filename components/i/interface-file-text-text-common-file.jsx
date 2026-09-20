import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_y1aiqxr.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="h_y1aiqxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-file-text-text-common-file"} {...others} />);
}

export default Component;
