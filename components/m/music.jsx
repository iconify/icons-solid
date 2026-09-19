import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/d/dyone_blp.css';
import '../../css/q/q-em7j0jk.css';
import '../../css/g/gi9trt-rw.css';
import '../../css/q/qy_qwjbnq.css';
import '../../css/x/xq4ykab6k.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ufeehvblu"><path class="dyone_blp"/><ellipse class="q-em7j0jk"/><path class="gi9trt-rw"/><ellipse class="qy_qwjbnq"/><path class="xq4ykab6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:music"} {...others} />);
}

export default Component;
