import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ikplvmbos.css';
import '../../css/r/racm5fbpm.css';
import '../../css/d/d2xmu7b2s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ikplvmbos"/><path class="racm5fbpm"/><path class="d2xmu7b2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:chart-candlestick"} {...others} />);
}

export default Component;
