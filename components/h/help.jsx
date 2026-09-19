import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqd8fcboz.css';
import '../../css/b/b7lx2lr3j.css';
import '../../css/z/z32cxfhol.css';
import '../../css/l/lx8ft0ban.css';
import '../../css/x/xzwyr3b6b.css';
import '../../css/s/s_twbabis.css';
import '../../css/s/s9od4ac2u.css';
import '../../css/e/et0vgrblc.css';
import '../../css/z/z5wi9i6-x.css';
import '../../css/n/nkzn84bra.css';
import '../../css/k/kavy7ccjp.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="hqd8fcboz"><circle transform="rotate(45)" class="b7lx2lr3j"/><circle transform="rotate(45)" class="z32cxfhol"/><path class="lx8ft0ban"/><path class="xzwyr3b6b"/><path class="s_twbabis"/><path class="s9od4ac2u"/><path class="et0vgrblc"/><path class="z5wi9i6-x"/><path class="nkzn84bra"/><path class="kavy7ccjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:help"} {...others} />);
}

export default Component;
