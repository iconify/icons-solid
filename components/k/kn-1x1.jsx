import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwfeeebuj.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hoghssbkk.css';
import '../../css/m/mcc1kii_a.css';
import '../../css/k/kqt9iqb4o.css';
import '../../css/n/nd6nhgvad.css';
import '../../css/j/j9tl64bsz.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGk9ZNfeJQ"><path class="uwfeeebuj"/></clipPath></defs><g clip-path="url(#SVGk9ZNfeJQ)" transform="translate(-104.2 .2)scale(.68714)" class="d2kvgvbvc"><path class="hoghssbkk"/><path class="mcc1kii_a"/><path class="kqt9iqb4o"/><path class="nd6nhgvad"/><path class="j9tl64bsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:kn-1x1"} {...others} />);
}

export default Component;
