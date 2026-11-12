import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rd2317bpb.css';
import '../../css/d/dd62ynr7u.css';
import '../../css/q/qd-usjb9k.css';
import '../../css/e/efa-oubof.css';
import '../../css/c/cxjwkwbqh.css';
import '../../css/b/bh4vtcb8h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rd2317bpb"/><path class="dd62ynr7u"/><path class="qd-usjb9k"/><path class="efa-oubof"/><path class="cxjwkwbqh"/><path class="bh4vtcb8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:solarassistant-light"} {...others} />);
}

export default Component;
