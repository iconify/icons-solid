import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vp4kqio0x.css';
import '../../css/o/oc_v8ccyt.css';
import '../../css/p/p4pqdhbxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vp4kqio0x"/><path class="oc_v8ccyt"/><path class="p4pqdhbxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:jump-rope"} {...others} />);
}

export default Component;
