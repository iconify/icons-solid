import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ry9ol6lsh.css';
import '../../css/o/okcsfevjn.css';
import '../../css/w/wntb9b47b.css';
import '../../css/l/ld9cusbiy.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ry9ol6lsh"><circle class="okcsfevjn"/><circle class="wntb9b47b"/><circle class="ld9cusbiy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:varnish"} {...others} />);
}

export default Component;
