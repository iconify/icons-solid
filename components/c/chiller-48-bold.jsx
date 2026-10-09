import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qu9rvubvf.css';
import '../../css/y/ycyy2zfvg.css';
import '../../css/w/wsl5l-gpv.css';
import '../../css/u/uiazosb3r.css';
import '../../css/b/bq7vetxjn.css';
import '../../css/j/jhysqbbxu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qu9rvubvf"/><path class="ycyy2zfvg"/><path class="wsl5l-gpv"/><path class="uiazosb3r"/><path class="bq7vetxjn"/><path class="jhysqbbxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chiller-48-bold"} {...others} />);
}

export default Component;
