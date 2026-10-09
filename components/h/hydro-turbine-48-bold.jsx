import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjt_z5brr.css';
import '../../css/g/gkrmg0bdd.css';
import '../../css/w/w8f5y0ctf.css';
import '../../css/e/e27-1tvtb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zjt_z5brr"/><path class="gkrmg0bdd"/><path class="w8f5y0ctf"/><path class="e27-1tvtb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydro-turbine-48-bold"} {...others} />);
}

export default Component;
