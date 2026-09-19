import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/d/dpoetr4ls.css';
import '../../css/h/hp4489c2h.css';
import '../../css/t/t6e7xzbxe.css';
import '../../css/f/fcwhlzu5y.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="dpoetr4ls"/><path class="hp4489c2h"/><path class="t6e7xzbxe"/><path class="fcwhlzu5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:an"} {...others} />);
}

export default Component;
