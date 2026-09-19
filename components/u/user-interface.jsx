import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnfuhv80h.css';
import '../../css/b/b_hm3nbzh.css';
import '../../css/o/oq277fb2z.css';
import '../../css/v/ve9et7bhh.css';
import '../../css/k/knq-8fcua.css';
import '../../css/x/xcy4jsaep.css';
import '../../css/j/jsc_7mvku.css';
import '../../css/q/q1fk-3byj.css';
import '../../css/f/f-g75dbzn.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="vnfuhv80h"/><path class="b_hm3nbzh"/><path class="oq277fb2z"/><path class="ve9et7bhh"/><path class="knq-8fcua"/><path class="xcy4jsaep"/><path class="jsc_7mvku"/><path class="q1fk-3byj"/><path class="f-g75dbzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:user-interface"} {...others} />);
}

export default Component;
