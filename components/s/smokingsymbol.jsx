import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z13muzbbf.css';
import '../../css/d/dpo2nxbug.css';
import '../../css/x/x2gwlobcz.css';
import '../../css/n/ngw3hlb2s.css';
import '../../css/r/r_t9zp60z.css';
import '../../css/z/z5hc3ebqr.css';
import '../../css/h/h0rn42ypz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z13muzbbf"/><path class="dpo2nxbug"/><path class="x2gwlobcz"/><path class="ngw3hlb2s"/><ellipse class="r_t9zp60z"/><ellipse class="z5hc3ebqr"/><ellipse class="h0rn42ypz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:smokingsymbol"} {...others} />);
}

export default Component;
