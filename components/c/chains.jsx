import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hniqf4uct.css';
import '../../css/s/s6j6w1llc.css';
import '../../css/g/gfwetbbaf.css';
import '../../css/l/lciwvybuu.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/o/oqdrd-bed.css';
import '../../css/e/eox5lmzxr.css';
import '../../css/r/riva4lbsu.css';
import '../../css/e/eutolz4tf.css';

const viewBox = {"width":72,"height":72};
const content = `<ellipse class="hniqf4uct"/><ellipse class="s6j6w1llc"/><ellipse class="gfwetbbaf"/><path class="lciwvybuu"/><g class="jn8qy4bru"><path class="oqdrd-bed"/><path class="eox5lmzxr"/><path class="riva4lbsu"/><path class="eutolz4tf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:chains"} {...others} />);
}

export default Component;
