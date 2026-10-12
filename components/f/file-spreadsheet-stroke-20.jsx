import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8aj85itm.css';
import '../../css/y/ypv4l3ivv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r8aj85itm"/><path class="ypv4l3ivv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:file-spreadsheet-stroke-20"} {...others} />);
}

export default Component;
