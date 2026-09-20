import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ucx28femh.css';
import '../../css/o/oyscm1bel.css';
import '../../css/p/phvsc-r-k.css';

const viewBox = {"width":173,"height":32};
const content = `<g class="ucx28femh"><path class="oyscm1bel"/><path class="phvsc-r-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:crowdstrike"} {...others} />);
}

export default Component;
