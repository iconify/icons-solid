import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wfx6i99th.css';
import '../../css/c/c-mvzrf4i.css';
import '../../css/t/tzqjbmi0a.css';
import '../../css/c/c654qko_k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="wfx6i99th"/><path class="c-mvzrf4i"/><path class="tzqjbmi0a"/><path class="c654qko_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:stopwatch"} {...others} />);
}

export default Component;
