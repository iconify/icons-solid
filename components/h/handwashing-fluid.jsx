import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/fb4hq5b3x.css';
import '../../css/f/fg7vcwh7z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="fb4hq5b3x"/><path class="fg7vcwh7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:handwashing-fluid"} {...others} />);
}

export default Component;
