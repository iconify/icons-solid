import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/d/d_-x11bji.css';
import '../../css/t/tnn9fxbxj.css';
import '../../css/s/sq4bxibhc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="d_-x11bji"/><path class="tnn9fxbxj"/><circle transform="rotate(-180 12 10)" class="sq4bxibhc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:s-turn-left"} {...others} />);
}

export default Component;
