import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xq4i7fvzd.css';
import '../../css/c/c1f4szbmn.css';
import '../../css/r/ru21x0hju.css';
import '../../css/q/qmz1e48wn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="xq4i7fvzd"/><path class="c1f4szbmn"/><path class="ru21x0hju"/><path class="qmz1e48wn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:house"} {...others} />);
}

export default Component;
