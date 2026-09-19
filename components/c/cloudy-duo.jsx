import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/irabnhb9e.css';
import '../../css/j/jiz5zbbbs.css';
import '../../css/e/edo2a4sfe.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="irabnhb9e"/><path class="jiz5zbbbs"/><path class="edo2a4sfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:cloudy-duo"} {...others} />);
}

export default Component;
