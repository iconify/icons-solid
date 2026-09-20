import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tiom-cceg.css';
import '../../css/g/gp28t5vig.css';
import '../../css/h/hjpmkyhtz.css';
import '../../css/c/cfszdib1n.css';
import '../../css/v/vcyk_bc4s.css';
import '../../css/v/v6flclneu.css';
import '../../css/l/lpc01xjwi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="tiom-cceg"/><path class="gp28t5vig"/><path class="hjpmkyhtz"/><path class="cfszdib1n"/><path class="vcyk_bc4s"/><path class="v6flclneu"/><path class="lpc01xjwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:gambling"} {...others} />);
}

export default Component;
