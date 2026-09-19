import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/geju8gabu.css';
import '../../css/r/rgd00gins.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="geju8gabu"/><path clip-rule="evenodd" class="rgd00gins"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:circle-large"} {...others} />);
}

export default Component;
