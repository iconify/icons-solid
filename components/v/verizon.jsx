import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi4uwl52m.css';
import '../../css/s/svejfbtca.css';
import '../../css/c/c83fq425t.css';
import '../../css/k/kqyt3bc8y.css';

const viewBox = {"width":512,"height":512};
const content = `<radialGradient id="SVGZckYTbxx" cx="-993.352" cy="230.535" r="20.652" gradientTransform="matrix(0 -10.6725 9.6822 0 -1978.618 -10273.415)" gradientUnits="userSpaceOnUse"><stop offset="0" class="hi4uwl52m"/><stop offset="1" class="svejfbtca"/></radialGradient><path fill="url(#SVGZckYTbxx)" class="c83fq425t"/><path class="kqyt3bc8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:verizon"} {...others} />);
}

export default Component;
