import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/c_wnexbac.css';
import '../../css/j/jkah1-bkm.css';
import '../../css/f/frpr2ezpo.css';
import '../../css/k/kq7ijpinq.css';
import '../../css/o/o-8rotbug.css';
import '../../css/r/re3ivqbfx.css';
import '../../css/y/yerkq7bnn.css';
import '../../css/g/ghz77zopw.css';
import '../../css/q/qm8lxnamx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="c_wnexbac wm-shadow"/><path class="jkah1-bkm wm-s"/><path class="frpr2ezpo wm-shadow"/><path class="kq7ijpinq"/><path class="o-8rotbug"/><path class="re3ivqbfx"/><path class="wm-s yerkq7bnn"/><path class="ghz77zopw wm-s"/><path class="qm8lxnamx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:heart-gift"} {...others} />);
}

export default Component;
