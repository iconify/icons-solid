import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/s/sfiiq8rrc.css';
import '../../css/v/vilg2z-pa.css';
import '../../css/b/b838eboae.css';
import '../../css/j/jew3t7bfy.css';
import '../../css/p/pp9wydbtt.css';
import '../../css/a/asht9hbmi.css';
import '../../css/o/oga811b0w.css';
import '../../css/o/om9l6db_v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="sfiiq8rrc"/><path class="vilg2z-pa"/><path class="b838eboae"/><path clip-rule="evenodd" class="jew3t7bfy"/><path class="pp9wydbtt"/><path class="asht9hbmi"/><path class="oga811b0w"/><path class="om9l6db_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:heart"} {...others} />);
}

export default Component;
