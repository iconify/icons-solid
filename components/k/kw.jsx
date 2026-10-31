import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/inja6ob5h.css';
import '../../css/b/bc4gh5bbk.css';
import '../../css/z/z-h3f765i.css';
import '../../css/f/f61bxactw.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="inja6ob5h"/><path class="bc4gh5bbk"/><path class="z-h3f765i"/><path class="f61bxactw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:kw"} {...others} />);
}

export default Component;
