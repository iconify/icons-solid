import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/x/xr1zzs9rr.css';
import '../../css/p/pp3v195nj.css';
import '../../css/r/rs-d_y_0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><circle class="xr1zzs9rr"/><circle class="pp3v195nj"/><circle class="rs-d_y_0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:number-8-circle-light"} {...others} />);
}

export default Component;
