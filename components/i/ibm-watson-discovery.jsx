import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w785vnb8d.css';
import '../../css/b/bn83kioio.css';
import '../../css/s/svjxeeepc.css';
import '../../css/c/cq8_9dfnj.css';
import '../../css/a/ajjiiyh9i.css';
import '../../css/m/mgo43sbbk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="w785vnb8d"/><circle class="bn83kioio"/><circle class="svjxeeepc"/><path class="cq8_9dfnj"/><circle class="ajjiiyh9i"/><path class="mgo43sbbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-watson-discovery"} {...others} />);
}

export default Component;
