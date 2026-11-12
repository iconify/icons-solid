import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_-mg0p1l.css';
import '../../css/s/s672cjb3b.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/k/kckc1iwlf.css';
import '../../css/x/x8rkn-b2l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y_-mg0p1l"/><path class="s672cjb3b"/><linearGradient id="SVGIdG2NbyG" x1="53.8" x2="458.2" y1="60.7" y2="60.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="kckc1iwlf"/></linearGradient><path fill="url(#SVGIdG2NbyG)" class="x8rkn-b2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:anycable-light"} {...others} />);
}

export default Component;
