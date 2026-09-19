import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/d/d_-x11bji.css';
import '../../css/t/tnn9fxbxj.css';
import '../../css/g/grkq34bnl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="d_-x11bji"/><path class="tnn9fxbxj"/><circle transform="rotate(-180 12 10)" class="grkq34bnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:s-turn-left"} {...others} />);
}

export default Component;
