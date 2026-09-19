import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/c6b32lbva.css';
import '../../css/h/hkw5s0b0y.css';
import '../../css/t/tb7h92xrz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="c6b32lbva"/><path class="hkw5s0b0y"/><path class="tb7h92xrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:school"} {...others} />);
}

export default Component;
