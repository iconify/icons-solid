import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqlabd39y.css';
import '../../css/x/xru6ods3y.css';
import '../../css/b/b35qsibms.css';
import '../../css/q/qtychpn_h.css';
import '../../css/a/afksjkbfu.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/q/qafolbg6k.css';
import '../../css/r/rewyj1bmv.css';
import '../../css/o/or1mbym7c.css';
import '../../css/x/x6tsacblq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="eqlabd39y"/><path class="xru6ods3y"/><path class="b35qsibms"/><path class="qtychpn_h"/><path class="afksjkbfu"/><g class="ij2x_72vy"><path class="qafolbg6k"/><path class="rewyj1bmv"/><path class="or1mbym7c"/><path class="x6tsacblq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:duck"} {...others} />);
}

export default Component;
