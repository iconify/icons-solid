import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dp7_e5biu.css';
import '../../css/f/foa_mcc1x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dp7_e5biu"/><path class="foa_mcc1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:sidewaysuppointingindex"} {...others} />);
}

export default Component;
