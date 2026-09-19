import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/fb4hq5b3x.css';
import '../../css/l/l87yxcubm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="fb4hq5b3x"/><path class="l87yxcubm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:handwashing-fluid"} {...others} />);
}

export default Component;
