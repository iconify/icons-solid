import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sb55jl95u.css';
import '../../css/r/rh1pnvbcd.css';
import '../../css/c/c9bteb4uq.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="sb55jl95u"/><path class="rh1pnvbcd"/><path class="c9bteb4uq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:direction-rotary-straight-filled"} {...others} />);
}

export default Component;
