import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9pq-abme.css';
import '../../css/q/q133b_p0v.css';
import '../../css/n/nlmdxkqjd.css';
import '../../css/v/v73jdib8l.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/a/amm3co44a.css';
import '../../css/c/cw3d66bob.css';
import '../../css/t/tukvnlbmo.css';
import '../../css/o/ocs2e82mg.css';

const viewBox = {"width":72,"height":72};
const content = `<g transform="matrix(-1 0 0 1 72 0)" class="k9pq-abme"><circle class="q133b_p0v"/><path class="nlmdxkqjd"/><path class="v73jdib8l"/></g><g transform="matrix(-1 0 0 1 72 0)" class="brzn_0bpr"><circle class="amm3co44a"/><path class="cw3d66bob"/><path class="tukvnlbmo"/><path class="ocs2e82mg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-running-medium-skin-tone-facing-right"} {...others} />);
}

export default Component;
