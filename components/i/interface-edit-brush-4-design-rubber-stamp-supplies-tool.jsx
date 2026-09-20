import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/widsseezf.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="widsseezf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-brush-4-design-rubber-stamp-supplies-tool"} {...others} />);
}

export default Component;
