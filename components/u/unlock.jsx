import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/j/j9vg3_jgc.css';
import '../../css/s/skrettb2q.css';
import '../../css/h/hmcoah3hh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="j9vg3_jgc"/><path class="skrettb2q"/><path class="hmcoah3hh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:unlock"} {...others} />);
}

export default Component;
