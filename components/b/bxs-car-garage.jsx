import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ef1_z1bld.css';
import '../../css/h/h0_g0cb-k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ef1_z1bld"/><path class="h0_g0cb-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-car-garage"} {...others} />);
}

export default Component;
