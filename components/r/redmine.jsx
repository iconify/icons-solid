import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqvr0v2ea.css';
import '../../css/u/uuehjku7c.css';
import '../../css/o/obrbe1bus.css';
import '../../css/w/w-m7llbyo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qqvr0v2ea"/><path class="uuehjku7c"/><path class="obrbe1bus"/><path class="w-m7llbyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:redmine"} {...others} />);
}

export default Component;
