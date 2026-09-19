import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhnlhhbgn.css';
import '../../css/t/t4_f6k39w.css';
import '../../css/u/uizh__bvn.css';
import '../../css/k/khlacg85o.css';
import '../../css/x/x7iyjcc3y.css';
import '../../css/c/c4hrshagc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nhnlhhbgn"/><path class="t4_f6k39w"/><path class="uizh__bvn"/><path class="khlacg85o"/><path class="x7iyjcc3y"/><path class="c4hrshagc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:huoshanzhibo"} {...others} />);
}

export default Component;
