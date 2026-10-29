import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/d41a1jb2b.css';
import '../../css/k/kg1lwmffq.css';
import '../../css/b/bsbp2z6jx.css';
import '../../css/v/vskomn-ks.css';
import '../../css/j/j8ihrqb0c.css';
import '../../css/h/h6woxez7l.css';
import '../../css/a/akvr8ibym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="d41a1jb2b wm-shadow"/><path class="kg1lwmffq"/><path class="bsbp2z6jx"/><path class="vskomn-ks"/><path class="j8ihrqb0c"/><path class="h6woxez7l wm-shine"/><path class="akvr8ibym wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:shopping-cart"} {...others} />);
}

export default Component;
