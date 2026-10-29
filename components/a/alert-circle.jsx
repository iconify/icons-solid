import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdt7m1b7w.css';
import '../../css/u/u-m18xq2u.css';
import '../../css/a/azd-ldnno.css';
import '../../css/r/rj6i1j8ra.css';
import '../../css/x/x7unwacly.css';
import '../../css/b/b-rtcjbot.css';
import '../../css/p/pne3pub7v.css';
import '../../css/j/jz6dbzbdu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hdt7m1b7w wm-shadow"/><path class="u-m18xq2u wm-k"/><path class="azd-ldnno wm-k"/><path class="rj6i1j8ra wm-k"/><path class="wm-k x7unwacly"/><path class="b-rtcjbot wm-k"/><path class="pne3pub7v wm-shine"/><path class="jz6dbzbdu wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:alert-circle"} {...others} />);
}

export default Component;
