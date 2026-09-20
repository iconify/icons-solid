import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b3u6nv0dw.css';
import '../../css/z/zcn42kbvs.css';
import '../../css/t/tnm7bbc_n.css';
import '../../css/s/s-iph7brt.css';
import '../../css/q/qs5t91bpv.css';
import '../../css/a/a6nm2absb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="b3u6nv0dw"/><path class="zcn42kbvs"/><path class="tnm7bbc_n"/><path class="s-iph7brt"/><path class="qs5t91bpv"/><path class="a6nm2absb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:artificial-intelligence-spark"} {...others} />);
}

export default Component;
