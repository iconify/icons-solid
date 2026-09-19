import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0wz8-9aw.css';
import '../../css/b/bx4rl0qqy.css';
import '../../css/i/i-ob9li1j.css';
import '../../css/t/tm1p56nme.css';
import '../../css/e/elzyobbir.css';
import '../../css/d/d932a33cr.css';
import '../../css/u/ux3mz9bul.css';
import '../../css/l/l191s8bau.css';
import '../../css/t/tyuu71b5e.css';
import '../../css/j/jtwwg1b-r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j0wz8-9aw"/><path class="bx4rl0qqy"/><path class="i-ob9li1j"/><path class="tm1p56nme"/><path class="elzyobbir"/><path class="d932a33cr"/><path class="ux3mz9bul"/><path class="l191s8bau"/><path class="tyuu71b5e"/><path class="jtwwg1b-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:foggy"} {...others} />);
}

export default Component;
