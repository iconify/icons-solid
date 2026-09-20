import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jt45ahbuy.css';
import '../../css/z/zgfkd3bzs.css';
import '../../css/x/xfjs0v6ev.css';
import '../../css/l/lbvc_2bwr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jt45ahbuy"/><path clip-rule="evenodd" class="zgfkd3bzs"/><path class="xfjs0v6ev"/><path clip-rule="evenodd" class="lbvc_2bwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:gambling-flat"} {...others} />);
}

export default Component;
