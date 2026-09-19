import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/i/i8equl19z.css';
import '../../css/f/fdbt40b4q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="i8equl19z"/><path class="fdbt40b4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:file-cabinet"} {...others} />);
}

export default Component;
