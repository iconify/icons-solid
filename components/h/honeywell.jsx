import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuno1lrrs.css';
import '../../css/m/msgexqbje.css';
import '../../css/h/h_0ffnnmd.css';
import '../../css/e/eamfhdarv.css';
import '../../css/l/l0z0nxw4p.css';
import '../../css/f/fb2t6z48l.css';
import '../../css/q/qkhuqtswt.css';

const viewBox = {"width":190,"height":57.649};
const content = `<path class="kuno1lrrs"/><path class="msgexqbje"/><path class="h_0ffnnmd"/><path class="eamfhdarv"/><path class="l0z0nxw4p"/><path class="fb2t6z48l"/><path class="qkhuqtswt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:honeywell"} {...others} />);
}

export default Component;
