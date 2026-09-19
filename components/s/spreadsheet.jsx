import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_p8vvblx.css';
import '../../css/x/xeykeqb2d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z_p8vvblx"/><path class="xeykeqb2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:spreadsheet"} {...others} />);
}

export default Component;
