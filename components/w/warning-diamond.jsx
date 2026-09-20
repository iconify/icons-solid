import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/m2ttqfb1b.css';
import '../../css/g/givoivb6v.css';
import '../../css/u/u7dmb9f4q.css';
import '../../css/c/cdspdwk1m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="m2ttqfb1b"/><path class="givoivb6v"/><path class="u7dmb9f4q"/><path class="cdspdwk1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:warning-diamond"} {...others} />);
}

export default Component;
