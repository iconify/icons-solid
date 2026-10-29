import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfe2k5i7t.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kv8lm-1xo.css';
import '../../css/v/vbu8xkt9m.css';
import '../../css/i/itwsbbk3c.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mmqy4slim.css';
import '../../css/e/e8dyibc9c.css';
import '../../css/j/j31no74un.css';
import '../../css/t/trduunbld.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGN38RBl0i" class="yfe2k5i7t"/></defs><g class="t_2lkqbxb"><path class="kv8lm-1xo wm-shadow"/><path class="vbu8xkt9m"/><path class="itwsbbk3c"/><use href="#SVGN38RBl0i" class="d2kvgvbvc"/><path class="mmqy4slim"/><use href="#SVGN38RBl0i" class="d2kvgvbvc"/><path class="e8dyibc9c"/><path class="j31no74un wm-shine"/><path class="trduunbld wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:martini"} {...others} />);
}

export default Component;
