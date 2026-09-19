import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohddqdbak.css';
import '../../css/p/pq65h8bcm.css';
import '../../css/w/whxwn3bgk.css';
import '../../css/g/gdjsmd05b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ohddqdbak"><path class="pq65h8bcm"/><path class="whxwn3bgk"/></g><path class="gdjsmd05b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:key"} {...others} />);
}

export default Component;
