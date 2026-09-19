import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/w/wnuo3bejw.css';
import '../../css/z/zuxintbbc.css';
import '../../css/u/ux16ifpyr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="wnuo3bejw"/><path class="zuxintbbc"/><path class="ux16ifpyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:lamp"} {...others} />);
}

export default Component;
