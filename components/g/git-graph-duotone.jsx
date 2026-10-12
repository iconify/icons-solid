import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-40i3b7x.css';
import '../../css/i/i4us9_bhu.css';
import '../../css/m/m2uh4gbvp.css';
import '../../css/a/aw3igchky.css';
import '../../css/l/l0mjotq-a.css';
import '../../css/w/wde-mrlcg.css';
import '../../css/c/czmw5l55z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x-40i3b7x"/><path class="i4us9_bhu"/><path class="m2uh4gbvp"/><path class="aw3igchky"/><path class="l0mjotq-a"/><path class="wde-mrlcg"/><path class="czmw5l55z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:git-graph-duotone"} {...others} />);
}

export default Component;
