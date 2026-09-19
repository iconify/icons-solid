import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/knqqi0bdn.css';
import '../../css/z/z1ws09bbb.css';
import '../../css/w/w1hn1--la.css';
import '../../css/p/ppv_0hbpg.css';
import '../../css/t/tp2vcl6dg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="knqqi0bdn"/><circle class="z1ws09bbb"/><circle class="w1hn1--la"/><circle class="ppv_0hbpg"/><path class="tp2vcl6dg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pendulum"} {...others} />);
}

export default Component;
