import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/p/pxshsdb4p.css';
import '../../css/b/bvx415bfi.css';
import '../../css/m/m7z7k7b_n.css';
import '../../css/i/iz7bm0b6a.css';
import '../../css/i/iw3s67bka.css';
import '../../css/y/yh42l6bjc.css';
import '../../css/q/q6hviyf7v.css';
import '../../css/e/ev1lk3b9j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="pxshsdb4p"/><path class="bvx415bfi"/><path class="m7z7k7b_n"/><path class="iz7bm0b6a"/><path class="iw3s67bka"/><path class="yh42l6bjc"/><path class="q6hviyf7v"/><path class="ev1lk3b9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:two-dimensional-code-one"} {...others} />);
}

export default Component;
