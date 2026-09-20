import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3undxwqg.css';
import '../../css/u/uqa8-jbvj.css';
import '../../css/v/v_xkw1bvd.css';
import '../../css/a/a81o-njuq.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGYJQgWf9N" x1="179.742" x2="1278.366" y1="199.198" y2="-899.384" gradientTransform="matrix(.4 0 0 -.4 -29.4 122.2)" gradientUnits="userSpaceOnUse"><stop offset="0" class="k3undxwqg"/><stop offset="1" class="uqa8-jbvj"/></linearGradient><path fill="url(#SVGYJQgWf9N)" class="v_xkw1bvd"/><path class="a81o-njuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:planning-center-check-ins"} {...others} />);
}

export default Component;
