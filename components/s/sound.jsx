import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o3rcfubbo.css';
import '../../css/n/n5foubs5u.css';
import '../../css/q/qn7k1-07f.css';
import '../../css/c/cp8wscc-n.css';
import '../../css/t/tdni3vbqb.css';
import '../../css/q/q9l1epqpg.css';
import '../../css/j/ju7-g_bey.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="o3rcfubbo"/><circle class="n5foubs5u"/><circle class="qn7k1-07f"/><circle class="cp8wscc-n"/><circle class="tdni3vbqb"/><circle class="q9l1epqpg"/><circle class="ju7-g_bey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sound"} {...others} />);
}

export default Component;
