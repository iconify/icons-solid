import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zva1xr5is.css';
import '../../css/f/fwxhzyd4r.css';
import '../../css/l/l0jzagv7s.css';
import '../../css/v/v22u0dbhu.css';
import '../../css/n/nb11n_b8l.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="zva1xr5is"/><path class="fwxhzyd4r"/><path class="l0jzagv7s"/><path class="v22u0dbhu"/><circle class="nb11n_b8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:planet-moon"} {...others} />);
}

export default Component;
