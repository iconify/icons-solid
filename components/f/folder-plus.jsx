import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/ctq-00ygq.css';
import '../../css/q/q37jtebrq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ctq-00ygq"/><path class="q37jtebrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:folder-plus"} {...others} />);
}

export default Component;
