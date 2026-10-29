import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f41xbmbsm.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/lwdm45wnz.css';
import '../../css/r/rr7oq3b3f.css';
import '../../css/b/b1s-_juto.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/ltvo6vw3i.css';
import '../../css/h/h6ueykbzz.css';
import '../../css/z/zy5wd1-0b.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGYjCXbehl" class="f41xbmbsm"/></defs><g class="t_2lkqbxb"><path class="lwdm45wnz wm-shadow"/><path class="rr7oq3b3f"/><path class="b1s-_juto"/><use href="#SVGYjCXbehl" class="d2kvgvbvc"/><path class="ltvo6vw3i"/><use href="#SVGYjCXbehl" class="d2kvgvbvc"/><path class="h6ueykbzz"/><path class="wm-deco zy5wd1-0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:person-running"} {...others} />);
}

export default Component;
