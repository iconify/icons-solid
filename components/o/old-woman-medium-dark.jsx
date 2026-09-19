import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8yallbxn.css';
import '../../css/w/wdhmbubov.css';
import '../../css/w/wlfzuccoo.css';
import '../../css/l/lkvrsbr2r.css';
import '../../css/c/cj9vugbtp.css';
import '../../css/h/hrgbqd31n.css';
import '../../css/j/jsskzab1n.css';
import '../../css/p/ps7z7wb7n.css';
import '../../css/j/jho16t1sq.css';
import '../../css/p/pa_yjac-e.css';
import '../../css/x/xssxhhjee.css';
import '../../css/j/jliewpbsa.css';
import '../../css/u/urhqku1ey.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="h8yallbxn"/><path class="wdhmbubov"/><path class="wlfzuccoo"/><path class="lkvrsbr2r"/><path class="cj9vugbtp"/><path class="hrgbqd31n"/><path class="jsskzab1n"/><path class="ps7z7wb7n"/><path class="jho16t1sq"/><path class="pa_yjac-e"/><path class="xssxhhjee"/><path class="jliewpbsa"/><path class="urhqku1ey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:old-woman-medium-dark"} {...others} />);
}

export default Component;
