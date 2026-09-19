import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozm3mtb-w.css';
import '../../css/b/bdarodbdm.css';
import '../../css/h/hhl2ebb5m.css';
import '../../css/y/ywu-u159q.css';
import '../../css/f/fuv5wx26n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ozm3mtb-w"/><path class="bdarodbdm"/><path class="hhl2ebb5m"/><path class="ywu-u159q"/><path class="fuv5wx26n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:envelopedownarrowabove"} {...others} />);
}

export default Component;
