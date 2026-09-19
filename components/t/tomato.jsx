import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rraxkz3pj.css';
import '../../css/x/xkzec0bek.css';
import '../../css/x/xv0u4cfsn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rraxkz3pj"/><path class="xkzec0bek"/><path class="xv0u4cfsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:tomato"} {...others} />);
}

export default Component;
