import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/w9zx08bin.css';
import '../../css/i/i9cvrhbsl.css';
import '../../css/c/cn3jy9j_j.css';
import '../../css/k/kf4p55zdy.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="w9zx08bin"/><path class="i9cvrhbsl"/><path class="cn3jy9j_j"/><path class="kf4p55zdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:us-confederate-battle"} {...others} />);
}

export default Component;
