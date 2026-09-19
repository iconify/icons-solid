import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/t_81tp26r.css';
import '../../css/q/qx8acpbmh.css';
import '../../css/y/yaxb45m8g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="t_81tp26r"/><path class="qx8acpbmh"/><path clip-rule="evenodd" class="yaxb45m8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ko-fi"} {...others} />);
}

export default Component;
