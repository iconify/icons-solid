import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nxega0mee.css';
import '../../css/r/rnm1us33d.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="nxega0mee"/><path class="rnm1us33d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:box-arrow-down"} {...others} />);
}

export default Component;
