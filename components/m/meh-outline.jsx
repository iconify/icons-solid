import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/prmctsbee.css';
import '../../css/l/l4qf8vk5b.css';
import '../../css/u/ubpyrdmuc.css';
import '../../css/p/peejenwcc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="prmctsbee"/><path clip-rule="evenodd" class="l4qf8vk5b"/><path class="ubpyrdmuc"/><path clip-rule="evenodd" class="peejenwcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:meh-outline"} {...others} />);
}

export default Component;
