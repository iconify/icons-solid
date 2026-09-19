import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/rlsrn9q2c.css';
import '../../css/z/zij55eb5n.css';
import '../../css/e/ecctieb4n.css';
import '../../css/l/l6ax0lbka.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="rlsrn9q2c"/><path class="zij55eb5n"/><path class="ecctieb4n"/><path class="l6ax0lbka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:cm"} {...others} />);
}

export default Component;
