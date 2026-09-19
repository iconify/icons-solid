import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/n03w5kbkh.css';
import '../../css/b/bdnk3hued.css';
import '../../css/g/gzi1ffbys.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="n03w5kbkh"/><path class="bdnk3hued"/><path class="gzi1ffbys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:six-key"} {...others} />);
}

export default Component;
