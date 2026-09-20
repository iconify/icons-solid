import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/m/mxpc0lbwc.css';
import '../../css/x/xo0gn7bpl.css';
import '../../css/m/mho4m-bvk.css';
import '../../css/y/ynqplacsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="shu3xdl9q"/><circle class="aqhok2bbj"/><path class="mxpc0lbwc"/><path class="xo0gn7bpl"/><path class="mho4m-bvk"/><path class="ynqplacsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:help-linear"} {...others} />);
}

export default Component;
