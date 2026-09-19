import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/didjmw4im.css';
import '../../css/f/fj1bi7lzz.css';
import '../../css/l/l93nljbqm.css';
import '../../css/p/p_2l-y_6b.css';
import '../../css/v/vsxzpib0o.css';
import '../../css/o/o-p--zlby.css';
import '../../css/f/fbn_o650w.css';
import '../../css/y/yevjxeg7s.css';
import '../../css/u/ute29oton.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="didjmw4im"/><rect class="fj1bi7lzz"/><rect class="l93nljbqm"/><rect class="p_2l-y_6b"/><rect class="vsxzpib0o"/><rect class="o-p--zlby"/><rect class="fbn_o650w"/><rect class="yevjxeg7s"/><rect class="ute29oton"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:apps-outline"} {...others} />);
}

export default Component;
