import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1sy3hmnb.css';
import '../../css/e/eitqojsnf.css';
import '../../css/o/ou0mn8_6n.css';
import '../../css/c/cyu6kxm8r.css';
import '../../css/k/kpfevug6z.css';
import '../../css/f/f7zjtbwkw.css';
import '../../css/t/t0sr3lbrt.css';
import '../../css/c/ck94mtjnw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w1sy3hmnb"/><path class="eitqojsnf"/><path class="ou0mn8_6n"/><path class="cyu6kxm8r"/><path class="kpfevug6z"/><path class="f7zjtbwkw"/><path class="t0sr3lbrt"/><path class="ck94mtjnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:suspensionrailway"} {...others} />);
}

export default Component;
