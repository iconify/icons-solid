import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1dr-lz2y.css';
import '../../css/d/dccl6cslv.css';
import '../../css/b/bz199wbrk.css';
import '../../css/j/jrvk_k-kt.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="g1dr-lz2y"/><path class="dccl6cslv"/><circle class="bz199wbrk"/><path class="jrvk_k-kt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:camera"} {...others} />);
}

export default Component;
