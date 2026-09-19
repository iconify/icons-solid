import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zc_ny91ct.css';
import '../../css/m/mmbmrn-5f.css';
import '../../css/l/lsk97ge1c.css';
import '../../css/n/nnwrxnbkc.css';
import '../../css/u/uci823paf.css';

const viewBox = {"width":100,"height":100.026};
const content = `<path class="zc_ny91ct"/><path class="mmbmrn-5f"/><path class="lsk97ge1c"/><path class="nnwrxnbkc"/><path class="uci823paf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:key"} {...others} />);
}

export default Component;
