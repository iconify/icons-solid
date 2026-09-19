import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn55ge7zx.css';
import '../../css/p/p9_9iqf-j.css';
import '../../css/g/g3y8pb1er.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="tn55ge7zx"><path class="p9_9iqf-j"/><path class="g3y8pb1er"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:big-x"} {...others} />);
}

export default Component;
