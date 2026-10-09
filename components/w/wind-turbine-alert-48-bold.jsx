import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l41hwx-3b.css';
import '../../css/d/dztgh4bcl.css';
import '../../css/b/b1sfwsxyj.css';
import '../../css/a/alivzijug.css';
import '../../css/v/vx_c1fbga.css';
import '../../css/y/yaxfqg-ge.css';
import '../../css/h/h5s-76m0p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l41hwx-3b"/><path class="dztgh4bcl"/><path class="b1sfwsxyj"/><path class="alivzijug"/><path class="vx_c1fbga"/><path class="yaxfqg-ge"/><path class="h5s-76m0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-alert-48-bold"} {...others} />);
}

export default Component;
