import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/liv05r6py.css';
import '../../css/t/tbb030bka.css';
import '../../css/k/k-j6tfd7q.css';
import '../../css/h/hv0ire2ti.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="liv05r6py"/><path class="tbb030bka"/><path class="k-j6tfd7q"/><path class="hv0ire2ti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:desktop-dollar"} {...others} />);
}

export default Component;
