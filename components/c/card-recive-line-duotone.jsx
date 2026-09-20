import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g56u1es1x.css';
import '../../css/t/tu2r7ibad.css';
import '../../css/b/bbqlgybvp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="g56u1es1x"/><path class="tu2r7ibad"/><path class="bbqlgybvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-recive-line-duotone"} {...others} />);
}

export default Component;
