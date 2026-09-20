import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/j1kgb1ejc.css';
import '../../css/n/nsbv8cbky.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="j1kgb1ejc"/><path class="nsbv8cbky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:file-video-4"} {...others} />);
}

export default Component;
