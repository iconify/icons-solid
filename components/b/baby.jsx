import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kchcljtha.css';
import '../../css/u/u-rof7v5h.css';
import '../../css/m/m9pdbsboj.css';
import '../../css/i/i3dqn5vvm.css';
import '../../css/h/hj6upjban.css';
import '../../css/b/ba-nbdefm.css';
import '../../css/h/h09q41bbg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kchcljtha"/><path class="u-rof7v5h"/><path class="m9pdbsboj"/><path class="i3dqn5vvm"/><path clip-rule="evenodd" class="hj6upjban"/><path class="ba-nbdefm"/><path class="h09q41bbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:baby"} {...others} />);
}

export default Component;
