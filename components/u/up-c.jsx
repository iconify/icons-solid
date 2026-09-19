import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/geju8gabu.css';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/j-npdpb0r.css';
import '../../css/w/w-gz11o7m.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><path id="SVGTYbpMega" class="geju8gabu"/></defs><g class="hit3bi0-v"><use href="#SVGTYbpMega" clip-rule="evenodd"/><use href="#SVGTYbpMega" class="j-npdpb0r"/><path class="w-gz11o7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:up-c"} {...others} />);
}

export default Component;
