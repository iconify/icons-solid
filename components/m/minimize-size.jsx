import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/j3ipt_bwp.css';
import '../../css/m/m28ktvtjt.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="j3ipt_bwp"/><path class="m28ktvtjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:minimize-size"} {...others} />);
}

export default Component;
