import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jmv52wbro.css';
import '../../css/r/r7ipq5s-n.css';
import '../../css/a/axjtsp52f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jmv52wbro"/><path class="r7ipq5s-n"/><path class="axjtsp52f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:slider-minimalistic-horizontal-broken"} {...others} />);
}

export default Component;
