import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1_kz5mbe.css';
import '../../css/x/xz667beoh.css';
import '../../css/b/bpy1pqbfv.css';
import '../../css/f/fpyr91bdk.css';
import '../../css/c/c-djupbsf.css';
import '../../css/e/eklhgjbht.css';
import '../../css/z/z66um2gfd.css';
import '../../css/w/wz20s5vwe.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d1_kz5mbe"/><path class="xz667beoh"/><path class="bpy1pqbfv"/><path class="fpyr91bdk"/><path class="c-djupbsf"/><path class="eklhgjbht"/><path class="z66um2gfd"/><path class="wz20s5vwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bus-bold-duotone"} {...others} />);
}

export default Component;
