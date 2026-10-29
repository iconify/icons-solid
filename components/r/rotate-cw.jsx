import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/nf29y_93q.css';
import '../../css/h/htgtfrbjt.css';
import '../../css/u/u-wlxovpw.css';
import '../../css/e/e74c4zb6g.css';
import '../../css/n/nc14oobdt.css';
import '../../css/e/e9_-4fp5h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="nf29y_93q wm-shadow"/><path class="htgtfrbjt"/><path class="u-wlxovpw"/><path class="e74c4zb6g"/><path class="nc14oobdt wm-shine"/><path class="e9_-4fp5h wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:rotate-cw"} {...others} />);
}

export default Component;
