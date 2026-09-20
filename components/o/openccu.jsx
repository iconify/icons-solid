import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sx7ti91eg.css';
import '../../css/g/gvrxjwf7j.css';
import '../../css/i/ijolyrbiu.css';
import '../../css/o/ouc1nf48s.css';
import '../../css/f/f3d9_kwgj.css';
import '../../css/t/tp36hbbvf.css';
import '../../css/k/k7-9byyiw.css';
import '../../css/r/rginkzbov.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sx7ti91eg"/><path class="gvrxjwf7j"/><path class="ijolyrbiu"/><path class="ouc1nf48s"/><path class="f3d9_kwgj"/><path class="tp36hbbvf"/><path class="k7-9byyiw"/><path class="rginkzbov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openccu"} {...others} />);
}

export default Component;
