import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j2ll6ybku.css';
import '../../css/m/mxz1u7bmv.css';
import '../../css/r/rvab3vb8p.css';
import '../../css/n/n0vnjtbdr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="j2ll6ybku"/><path class="mxz1u7bmv"/><path class="rvab3vb8p"/><path class="n0vnjtbdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:mutation-1"} {...others} />);
}

export default Component;
