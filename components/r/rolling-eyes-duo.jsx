import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-ntwsbcy.css';
import '../../css/i/i6-20-b6o.css';
import '../../css/g/gpy5opbyj.css';
import '../../css/a/aonm-8qcs.css';
import '../../css/x/xiv5klbfn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="f-ntwsbcy"/><path class="i6-20-b6o"/><path class="gpy5opbyj"/><path class="aonm-8qcs"/><path class="xiv5klbfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:rolling-eyes-duo"} {...others} />);
}

export default Component;
