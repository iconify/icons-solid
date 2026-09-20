import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x8uid8bbr.css';
import '../../css/l/l-8z1dbaq.css';
import '../../css/x/x3iiwe1dj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x8uid8bbr"/><path class="l-8z1dbaq"/><path class="x3iiwe1dj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:moon-sleep-broken"} {...others} />);
}

export default Component;
