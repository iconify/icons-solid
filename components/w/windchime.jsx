import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqdlc6agx.css';
import '../../css/e/e45bw9w1u.css';
import '../../css/r/r5_13j3mr.css';
import '../../css/s/sfhb73n1r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kqdlc6agx"/><path class="e45bw9w1u"/><path class="r5_13j3mr"/><path class="sfhb73n1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:windchime"} {...others} />);
}

export default Component;
