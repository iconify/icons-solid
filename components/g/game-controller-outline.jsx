import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6nrxku1q.css';
import '../../css/x/xq8i1vblg.css';
import '../../css/j/j3gww53lz.css';
import '../../css/x/x-sooibuu.css';
import '../../css/r/r1xy2obod.css';
import '../../css/s/s_47o8ytx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m6nrxku1q"/><circle class="xq8i1vblg"/><path class="j3gww53lz"/><circle class="x-sooibuu"/><circle class="r1xy2obod"/><path class="s_47o8ytx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:game-controller-outline"} {...others} />);
}

export default Component;
