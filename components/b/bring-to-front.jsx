import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/spfnwnbrc.css';
import '../../css/q/qy-xuybra.css';
import '../../css/h/hk92wwirk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="spfnwnbrc"/><path class="qy-xuybra"/><path class="hk92wwirk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bring-to-front"} {...others} />);
}

export default Component;
