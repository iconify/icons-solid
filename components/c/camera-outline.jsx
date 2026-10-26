import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h_90zg5-g.css';
import '../../css/r/rnlzwqbim.css';
import '../../css/k/khjwtz1gt.css';
import '../../css/j/jq0l92hsf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="h_90zg5-g"/><path clip-rule="evenodd" class="rnlzwqbim"/><path clip-rule="evenodd" class="khjwtz1gt"/><path clip-rule="evenodd" class="jq0l92hsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:camera-outline"} {...others} />);
}

export default Component;
