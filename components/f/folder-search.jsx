import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/ctq-00ygq.css';
import '../../css/b/bbir9wb5m.css';
import '../../css/w/wxrtcfo2g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ctq-00ygq"/><circle class="bbir9wb5m"/><path class="wxrtcfo2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:folder-search"} {...others} />);
}

export default Component;
