import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/legrbpbjr.css';
import '../../css/p/ph2tstnjm.css';
import '../../css/w/wlouvbclk.css';
import '../../css/h/hy2dxs2mr.css';
import '../../css/t/tom_5be9g.css';
import '../../css/o/or00o6brq.css';
import '../../css/a/a-qwh2l5c.css';
import '../../css/e/ezf5iw22t.css';
import '../../css/n/nuzht3bdg.css';
import '../../css/i/i4dldzdnh.css';
import '../../css/d/d1l9hpbuh.css';
import '../../css/t/tsx8xab5t.css';
import '../../css/l/ldvasnbyg.css';
import '../../css/t/tygfwxbhr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="legrbpbjr"/><path class="ph2tstnjm"/><path class="wlouvbclk"/><path class="hy2dxs2mr"/><path class="tom_5be9g"/><path class="or00o6brq"/><path class="a-qwh2l5c"/><path class="ezf5iw22t"/><path class="nuzht3bdg"/><path class="i4dldzdnh"/><path class="d1l9hpbuh"/><path class="tsx8xab5t"/><path class="ldvasnbyg"/><path class="tygfwxbhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:jeans"} {...others} />);
}

export default Component;
