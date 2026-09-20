import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/cf-tt3b8f.css';
import '../../css/s/s44bi0bgr.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="cf-tt3b8f"/><path class="s44bi0bgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:sort-descending"} {...others} />);
}

export default Component;
