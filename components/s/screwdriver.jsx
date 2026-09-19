import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/x/xngdku6ad.css';
import '../../css/p/pzopvfbeg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="xngdku6ad"/><path class="pzopvfbeg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:screwdriver"} {...others} />);
}

export default Component;
