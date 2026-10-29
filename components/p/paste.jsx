import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gvg9cqknu.css';
import '../../css/b/b1rt3nbhs.css';
import '../../css/j/jtge4ibmp.css';
import '../../css/h/h22t0ib4r.css';
import '../../css/g/g_42l8bov.css';
import '../../css/e/ejzfufboq.css';
import '../../css/m/my23js-jz.css';
import '../../css/i/iqhjyybzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="gvg9cqknu wm-shadow"/><path class="b1rt3nbhs"/><path class="jtge4ibmp"/><path class="h22t0ib4r"/><path class="g_42l8bov"/><path class="ejzfufboq wm-shine"/><path class="my23js-jz wm-deco"/><path class="iqhjyybzt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:paste"} {...others} />);
}

export default Component;
