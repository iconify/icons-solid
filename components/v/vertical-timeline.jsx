import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jxr8m2bzo.css';
import '../../css/w/w-ivl6c7l.css';
import '../../css/o/o2u4fe-pd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="jxr8m2bzo"/><path class="w-ivl6c7l"/><path class="o2u4fe-pd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:vertical-timeline"} {...others} />);
}

export default Component;
