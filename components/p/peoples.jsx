import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nzul_zbqb.css';
import '../../css/q/qu-seslis.css';
import '../../css/a/a9jb4ybyn.css';
import '../../css/i/i_1yambes.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="nzul_zbqb"/><path class="qu-seslis"/><path class="a9jb4ybyn"/><path class="i_1yambes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:peoples"} {...others} />);
}

export default Component;
