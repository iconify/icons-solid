import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dqf7tw-_j.css';
import '../../css/n/nn5-jrewn.css';
import '../../css/p/py7ktqbvf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGXv8lpc2Y)"><path fill="url(#SVG9tzNceiv)" clip-rule="evenodd" class="dqf7tw-_j"/></g><defs><linearGradient id="SVG9tzNceiv" x1="12" x2="12" y1="23.907" y2=".517" gradientUnits="userSpaceOnUse"><stop class="nn5-jrewn"/><stop offset="1" class="nn5-jrewn"/></linearGradient><clipPath id="SVGXv8lpc2Y"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:apple-music"} {...others} />);
}

export default Component;
