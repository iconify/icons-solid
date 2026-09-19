import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pac306byp.css';
import '../../css/n/nwrl2rjgh.css';
import '../../css/c/c80aj8b-s.css';
import '../../css/c/cwstqz83y.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="pac306byp"/><path clip-rule="evenodd" class="nwrl2rjgh"/><path class="c80aj8b-s"/><path clip-rule="evenodd" class="cwstqz83y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:note-outline"} {...others} />);
}

export default Component;
