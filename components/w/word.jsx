import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/r8cyu3bwz.css';
import '../../css/j/jv81oebrl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="r8cyu3bwz"/><path class="jv81oebrl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:word"} {...others} />);
}

export default Component;
