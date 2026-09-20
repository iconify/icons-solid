import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_r0h8b-f.css';
import '../../css/r/rvqxb2b-h.css';
import '../../css/c/c5osqbspf.css';
import '../../css/w/wjm0u0s-g.css';
import '../../css/q/qaojfdcft.css';
import '../../css/r/rnkd2fyes.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o_r0h8b-f"/><path class="rvqxb2b-h"/><path class="c5osqbspf"/><path class="wjm0u0s-g"/><path class="qaojfdcft"/><path class="rnkd2fyes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:filter-plus"} {...others} />);
}

export default Component;
