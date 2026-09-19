import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpx_avb5q.css';
import '../../css/o/o2nk84i8d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tpx_avb5q"/><circle class="o2nk84i8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-figma"} {...others} />);
}

export default Component;
