import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hm1o5ccoz.css';
import '../../css/o/obkkoglrp.css';
import '../../css/p/p34lxkxwh.css';
import '../../css/i/i-gsmlpun.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hm1o5ccoz"/><path class="obkkoglrp"/><path class="p34lxkxwh"/><path class="i-gsmlpun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-kdrive"} {...others} />);
}

export default Component;
