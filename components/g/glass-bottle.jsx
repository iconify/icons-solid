import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqqs1ebbb.css';
import '../../css/h/hg47wk4ej.css';
import '../../css/t/tfk3f3ksy.css';
import '../../css/e/e-pobobsj.css';
import '../../css/q/qq8xk5bhf.css';
import '../../css/j/jm71xrbjb.css';
import '../../css/c/cnro95b6z.css';
import '../../css/o/ozyadfahz.css';
import '../../css/q/qhz-dtb8b.css';
import '../../css/i/i2qjptbqp.css';
import '../../css/f/faaryebyb.css';
import '../../css/i/ijgehybmq.css';
import '../../css/b/br-jcs7nh.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="sqqs1ebbb"/><rect class="hg47wk4ej"/><path class="tfk3f3ksy"/><path class="e-pobobsj"/><circle class="qq8xk5bhf"/><circle class="jm71xrbjb"/><ellipse class="cnro95b6z"/><ellipse class="ozyadfahz"/><ellipse class="qhz-dtb8b"/><ellipse class="i2qjptbqp"/><ellipse class="faaryebyb"/><ellipse class="ijgehybmq"/><path class="br-jcs7nh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:glass-bottle"} {...others} />);
}

export default Component;
