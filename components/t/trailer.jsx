import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_kz6n-mp.css';
import '../../css/e/e-zb4h3nw.css';
import '../../css/z/zwa1wbcqx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="b_kz6n-mp"/><path class="e-zb4h3nw"/><path class="zwa1wbcqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:trailer"} {...others} />);
}

export default Component;
