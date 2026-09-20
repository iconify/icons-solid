import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/f8rhtwbgv.css';
import '../../css/z/z1ponlb9v.css';
import '../../css/x/x1w6uv83u.css';
import '../../css/e/evlg1muwl.css';
import '../../css/z/zcjr5-4tr.css';
import '../../css/b/b8e4e3byp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="f8rhtwbgv"/><path class="z1ponlb9v"/><path class="x1w6uv83u"/><path class="evlg1muwl"/><path class="zcjr5-4tr"/><path class="b8e4e3byp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:link-chain"} {...others} />);
}

export default Component;
