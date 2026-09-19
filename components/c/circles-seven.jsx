import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tk1fx-k4e.css';
import '../../css/m/m9n0hxb7p.css';
import '../../css/r/r-4avvaah.css';
import '../../css/q/q-l0-dbqm.css';
import '../../css/o/o7b7df1_a.css';
import '../../css/s/skam1w1mz.css';
import '../../css/i/i78xwfb3q.css';
import '../../css/b/bzx8x3bgr.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="tk1fx-k4e"><path class="m9n0hxb7p"/><path class="r-4avvaah"/><path class="q-l0-dbqm"/><path class="o7b7df1_a"/><path class="skam1w1mz"/><path class="i78xwfb3q"/><path class="bzx8x3bgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:circles-seven"} {...others} />);
}

export default Component;
