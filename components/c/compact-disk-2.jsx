import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/a/a07m10b6a.css';
import '../../css/c/cry743bec.css';
import '../../css/v/vp52robvj.css';
import '../../css/w/wvwbcz5yh.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="a07m10b6a"/><path class="cry743bec"/><path class="vp52robvj"/><path class="wvwbcz5yh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:compact-disk-2"} {...others} />);
}

export default Component;
