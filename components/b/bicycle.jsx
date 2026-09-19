import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddj93nnuc.css';
import '../../css/a/ay_q1cpdc.css';
import '../../css/m/mzdzdcbrw.css';
import '../../css/j/jm1mqtufh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ddj93nnuc"/><path class="ay_q1cpdc"/><path class="mzdzdcbrw"/><circle class="jm1mqtufh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bicycle"} {...others} />);
}

export default Component;
