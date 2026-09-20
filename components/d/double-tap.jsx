import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aje9tziax.css';
import '../../css/t/tn-n_vbiw.css';
import '../../css/u/uz5oogqro.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/o/o7jksbgqt.css';
import '../../css/w/wg2cbgb-f.css';
import '../../css/w/wb56pbc3h.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="aje9tziax"/><path class="tn-n_vbiw"/><path class="uz5oogqro"/><g class="jn8qy4bru"><path class="o7jksbgqt"/><path class="wg2cbgb-f"/><path class="wb56pbc3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:double-tap"} {...others} />);
}

export default Component;
