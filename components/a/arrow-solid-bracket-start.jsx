import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4stb82oo.css';
import '../../css/w/w2gwy9tfq.css';
import '../../css/g/go_5mac4m.css';
import '../../css/k/k-cb5ojsx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="g4stb82oo"/><path clip-rule="evenodd" class="w2gwy9tfq"/><path class="go_5mac4m"/><path class="k-cb5ojsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:arrow-solid-bracket-start"} {...others} />);
}

export default Component;
