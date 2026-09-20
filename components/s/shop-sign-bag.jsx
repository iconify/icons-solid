import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k9b2uqp8a.css';
import '../../css/f/ffizuh3bv.css';
import '../../css/h/hs7y92bbg.css';
import '../../css/o/oydo0s1rl.css';
import '../../css/j/jw-62jqxr.css';
import '../../css/n/n_v0ygbjt.css';
import '../../css/z/z8p17j8zv.css';
import '../../css/y/ytpkmc0yp.css';
import '../../css/m/mjoxr8bnu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k9b2uqp8a"/><path class="ffizuh3bv"/><path class="hs7y92bbg"/><path class="oydo0s1rl"/><path class="jw-62jqxr"/><path class="n_v0ygbjt"/><path class="z8p17j8zv"/><path class="ytpkmc0yp"/><path class="mjoxr8bnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:shop-sign-bag"} {...others} />);
}

export default Component;
