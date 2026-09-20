import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9pq-abme.css';
import '../../css/p/pxvt114hy.css';
import '../../css/c/c8046fbzv.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/i/iem6_ei8g.css';
import '../../css/f/f4h9sgbbv.css';
import '../../css/w/w65b53brl.css';
import '../../css/t/tp_fuac2z.css';

const viewBox = {"width":72,"height":72};
const content = `<g transform="matrix(-1 0 0 1 72 0)" class="k9pq-abme"><circle class="pxvt114hy"/><path class="c8046fbzv"/></g><g class="brzn_0bpr"><g transform="matrix(-1 0 0 1 72 0)"><circle class="iem6_ei8g"/><path class="f4h9sgbbv"/><path class="w65b53brl"/></g><path class="tp_fuac2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-kneeling-medium-skin-tone-facing-right"} {...others} />);
}

export default Component;
