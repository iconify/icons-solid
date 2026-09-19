import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/nw9s1xgqx.css';
import '../../css/z/z-3ptvbim.css';
import '../../css/h/hxw676bki.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="nw9s1xgqx"/><path class="z-3ptvbim"/><path class="hxw676bki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:analysis"} {...others} />);
}

export default Component;
