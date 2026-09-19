import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ifbmssbgp.css';
import '../../css/u/u4mnyvb1x.css';
import '../../css/e/ebhu59bkz.css';
import '../../css/i/i_46mcc2q.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ifbmssbgp"/><path class="u4mnyvb1x"/><path class="ebhu59bkz"/><path class="i_46mcc2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:u-turn-sign-outline"} {...others} />);
}

export default Component;
