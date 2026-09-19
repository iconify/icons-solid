import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y0djph_hu.css';
import '../../css/b/b51061zzw.css';
import '../../css/j/j9d1q1wok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><rect class="y0djph_hu"/><path class="b51061zzw"/><path class="j9d1q1wok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:contact-01"} {...others} />);
}

export default Component;
