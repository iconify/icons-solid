import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thjuvbz3w.css';
import '../../css/w/wb4a-24qj.css';
import '../../css/z/zrehd5lww.css';
import '../../css/a/axhzbvb4d.css';
import '../../css/w/w4xc74b0l.css';
import '../../css/x/xeqtefbxt.css';
import '../../css/t/t9gb6kbhq.css';
import '../../css/i/ix5yoyvqp.css';
import '../../css/d/dd6pijbru.css';
import '../../css/p/p9q23-0pi.css';
import '../../css/j/jnmrx98fg.css';
import '../../css/z/zvvcc6bpc.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="thjuvbz3w"><path class="wb4a-24qj"/><path class="zrehd5lww"/><path class="axhzbvb4d"/><path class="w4xc74b0l"/><path class="xeqtefbxt"/><path class="t9gb6kbhq"/><path class="ix5yoyvqp"/><path class="dd6pijbru"/><path class="p9q23-0pi"/><path class="jnmrx98fg"/><path class="zvvcc6bpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:photography-duo"} {...others} />);
}

export default Component;
