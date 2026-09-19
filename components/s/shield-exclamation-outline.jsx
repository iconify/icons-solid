import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kgdi7ny9s.css';
import '../../css/p/p5k92nmzp.css';
import '../../css/w/w-3mh5pls.css';
import '../../css/i/ixisdkb9e.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="kgdi7ny9s"/><path clip-rule="evenodd" class="p5k92nmzp"/><path class="w-3mh5pls"/><path clip-rule="evenodd" class="ixisdkb9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:shield-exclamation-outline"} {...others} />);
}

export default Component;
