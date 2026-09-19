import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/k/krdqi-6-z.css';
import '../../css/b/bcdj4cc9v.css';
import '../../css/h/hdha3sb8p.css';
import '../../css/x/x6vlmaczm.css';
import '../../css/f/fozs9frit.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="krdqi-6-z"/><path class="bcdj4cc9v"/><path class="hdha3sb8p"/><path class="x6vlmaczm"/><path class="fozs9frit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-se"} {...others} />);
}

export default Component;
