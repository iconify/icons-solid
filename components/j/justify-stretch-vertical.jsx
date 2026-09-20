import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rwon19h1w.css';
import '../../css/c/cgl2m5s9b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rwon19h1w"/><path vector-effect="non-scaling-stroke" class="cgl2m5s9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:justify-stretch-vertical"} {...others} />);
}

export default Component;
