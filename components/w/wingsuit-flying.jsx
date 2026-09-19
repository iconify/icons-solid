import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti4q6eknm.css';
import '../../css/b/bsbfkackf.css';
import '../../css/b/bf_msp58c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ti4q6eknm"><path class="bsbfkackf"/><path class="bf_msp58c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:wingsuit-flying"} {...others} />);
}

export default Component;
