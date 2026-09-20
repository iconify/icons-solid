import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_r0h8b-f.css';
import '../../css/l/lklqkvbdd.css';
import '../../css/c/c5osqbspf.css';
import '../../css/o/okf641d7n.css';
import '../../css/n/nlmxogbsw.css';
import '../../css/q/qaojfdcft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o_r0h8b-f"/><path class="lklqkvbdd"/><path class="c5osqbspf"/><path class="okf641d7n"/><path class="nlmxogbsw"/><path class="qaojfdcft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:filter-6"} {...others} />);
}

export default Component;
