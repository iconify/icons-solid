import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oyxvwvb9z.css';
import '../../css/v/v2-sg-bdy.css';
import '../../css/n/nxpruiwiw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="oyxvwvb9z"/><path class="v2-sg-bdy"/><path class="nxpruiwiw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tools-duo"} {...others} />);
}

export default Component;
