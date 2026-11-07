import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojevbbmen.css';
import '../../css/w/w2eatcb7z.css';
import '../../css/x/x10_tqn2d.css';
import '../../css/m/mvm58ibll.css';
import '../../css/q/q7pndkbzr.css';
import '../../css/z/z3u8kpbxh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ojevbbmen"/><path class="w2eatcb7z"/><path class="x10_tqn2d"/><path class="mvm58ibll"/><path class="q7pndkbzr"/><path clip-rule="evenodd" class="z3u8kpbxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bluetooth-circle-bold"} {...others} />);
}

export default Component;
