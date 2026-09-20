import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfppa6zwk.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="gfppa6zwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-setting-wrench-crescent-tool-construction-tools-wrench-setting-edit-adjust"} {...others} />);
}

export default Component;
