import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/x/xomkwsbcz.css';
import '../../css/b/bxmyzdbvl.css';
import '../../css/v/vra9-yant.css';
import '../../css/p/pj1bkf6to.css';
import '../../css/k/k58dk7baw.css';
import '../../css/l/lg1nkxbwj.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="xomkwsbcz"/><path class="bxmyzdbvl"/><path class="vra9-yant"/><path class="pj1bkf6to"/><path class="k58dk7baw"/><path class="lg1nkxbwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:km"} {...others} />);
}

export default Component;
