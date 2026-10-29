import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jba3plseo.css';
import '../../css/l/l07_54ilu.css';
import '../../css/o/ozgnijb1b.css';
import '../../css/i/i5op_zmjf.css';
import '../../css/b/b4kol2b-v.css';
import '../../css/e/earorbncf.css';
import '../../css/m/mhy_5tbjq.css';
import '../../css/a/a604zgbyu.css';
import '../../css/m/m6ufm34pt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="jba3plseo wm-shadow"/><path class="l07_54ilu"/><path class="ozgnijb1b"/><path class="i5op_zmjf"/><path class="b4kol2b-v"/><path class="earorbncf"/><path class="mhy_5tbjq"/><path class="a604zgbyu wm-deco"/><path class="m6ufm34pt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:qr-code"} {...others} />);
}

export default Component;
