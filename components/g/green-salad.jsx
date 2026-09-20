import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kc2v9z5yp.css';
import '../../css/q/qk_mfvako.css';
import '../../css/n/nlw-j22ka.css';
import '../../css/h/hsskd1bmu.css';
import '../../css/p/plp-rjd1e.css';
import '../../css/p/pl5k0masc.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/h/hk11h0bgw.css';
import '../../css/u/upu6uubye.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="kc2v9z5yp"/><circle class="qk_mfvako"/><circle class="nlw-j22ka"/><circle class="hsskd1bmu"/><path class="plp-rjd1e"/><path class="pl5k0masc"/><g class="jn8qy4bru"><path class="hk11h0bgw"/><path class="upu6uubye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:green-salad"} {...others} />);
}

export default Component;
