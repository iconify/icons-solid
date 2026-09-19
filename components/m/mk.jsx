import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/x/xba517gct.css';
import '../../css/g/gkjh98waa.css';
import '../../css/x/xk4b4y77u.css';
import '../../css/m/m32fw5efl.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="xba517gct"/><path class="gkjh98waa"/><circle class="xk4b4y77u"/><circle class="m32fw5efl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:mk"} {...others} />);
}

export default Component;
