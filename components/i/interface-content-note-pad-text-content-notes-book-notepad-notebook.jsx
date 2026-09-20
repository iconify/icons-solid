import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ozr44rbcf.css';
import '../../css/v/vnldo1btk.css';
import '../../css/l/lzqai377z.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="ozr44rbcf"/><rect class="vnldo1btk"/><path class="lzqai377z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-content-note-pad-text-content-notes-book-notepad-notebook"} {...others} />);
}

export default Component;
