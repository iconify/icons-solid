import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wyjaandfx.css';
import '../../css/q/qvqs3bb7l.css';
import '../../css/m/mtl7qob9c.css';
import '../../css/t/tajecub_z.css';
import '../../css/k/kottpk_wd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wyjaandfx"/><path class="qvqs3bb7l"/><path clip-rule="evenodd" class="mtl7qob9c"/><path class="tajecub_z"/><path clip-rule="evenodd" class="kottpk_wd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:border-outline"} {...others} />);
}

export default Component;
