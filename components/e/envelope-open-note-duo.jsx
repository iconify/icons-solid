import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/egmt2gfpt.css';
import '../../css/a/ab73cxb4x.css';
import '../../css/j/j6e3-sg1a.css';
import '../../css/c/cb-if1bxi.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="egmt2gfpt"/><path class="ab73cxb4x"/><path class="j6e3-sg1a"/><path class="cb-if1bxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:envelope-open-note-duo"} {...others} />);
}

export default Component;
