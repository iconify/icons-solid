import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/ba5fcebjo.css';
import '../../css/t/t71e3kbgv.css';
import '../../css/a/afkng-bck.css';
import '../../css/i/inuhyfbds.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ba5fcebjo"/><path clip-rule="evenodd" class="t71e3kbgv"/><path class="afkng-bck"/><path clip-rule="evenodd" class="inuhyfbds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:hand-holding-dollar-outline"} {...others} />);
}

export default Component;
