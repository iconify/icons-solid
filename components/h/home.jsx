import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lrw04_m5h.css';
import '../../css/p/phwbj0btc.css';
import '../../css/c/cut7hp9fp.css';
import '../../css/v/vj2ahb9ml.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lrw04_m5h"/><path class="phwbj0btc"/><path class="cut7hp9fp"/><path class="vj2ahb9ml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:home"} {...others} />);
}

export default Component;
