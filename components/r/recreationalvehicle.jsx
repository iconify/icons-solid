import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3je0_ezn.css';
import '../../css/o/o6p78db3s.css';
import '../../css/e/ema3heooh.css';
import '../../css/a/a6bu6ybyo.css';
import '../../css/l/lc80exb8r.css';
import '../../css/v/vhyr_cbom.css';
import '../../css/l/lewl3tckg.css';
import '../../css/r/rp_y-zbem.css';
import '../../css/a/adj3xibvz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x3je0_ezn"/><path class="o6p78db3s"/><path class="ema3heooh"/><path class="a6bu6ybyo"/><path class="lc80exb8r"/><path class="vhyr_cbom"/><path class="lewl3tckg"/><path class="rp_y-zbem"/><path class="adj3xibvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:recreationalvehicle"} {...others} />);
}

export default Component;
