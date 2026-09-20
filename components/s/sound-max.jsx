import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/m/mpf1xoj_w.css';
import '../../css/s/s9e9dhb2i.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="mpf1xoj_w"/><path class="s9e9dhb2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:sound-max"} {...others} />);
}

export default Component;
