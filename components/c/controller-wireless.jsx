import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pg9l32bmd.css';
import '../../css/u/ub-uf9b8i.css';
import '../../css/k/koo5vibpu.css';
import '../../css/y/y7c0jrb6j.css';
import '../../css/p/p64pu9bhs.css';
import '../../css/s/sdvwlbcfr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pg9l32bmd"/><path class="ub-uf9b8i"/><path class="koo5vibpu"/><path class="y7c0jrb6j"/><path class="p64pu9bhs"/><path class="sdvwlbcfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:controller-wireless"} {...others} />);
}

export default Component;
