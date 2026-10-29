import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xjw_oubbw.css';
import '../../css/d/dce10fbmw.css';
import '../../css/b/balsfmbtq.css';
import '../../css/b/bk0po5bts.css';
import '../../css/g/gzsl8vc-i.css';
import '../../css/t/tlhg092jz.css';
import '../../css/p/pcoytbb7x.css';
import '../../css/x/xybl-czma.css';
import '../../css/g/ge6pl5b7t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow xjw_oubbw"/><path class="dce10fbmw"/><path class="balsfmbtq"/><path class="bk0po5bts"/><path class="gzsl8vc-i"/><path class="tlhg092jz"/><path class="pcoytbb7x"/><path class="wm-shine xybl-czma"/><path class="ge6pl5b7t wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:glasses"} {...others} />);
}

export default Component;
