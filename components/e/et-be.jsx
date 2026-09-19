import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/a/algohugap.css';
import '../../css/j/j8o0txp9h.css';
import '../../css/u/ul3ge0b9c.css';
import '../../css/m/mj08j2bad.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="algohugap"/><path class="j8o0txp9h"/><path class="ul3ge0b9c"/><path class="mj08j2bad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:et-be"} {...others} />);
}

export default Component;
