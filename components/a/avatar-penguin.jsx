import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/r07p6zxqb.css';
import '../../css/i/ijjpqab8b.css';
import '../../css/g/gha40nb4p.css';
import '../../css/d/dg8n_kbjj.css';
import '../../css/m/mv9oj_cuu.css';
import '../../css/o/o8lfrlb9m.css';
import '../../css/y/yw3q-bb-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="r07p6zxqb wm-shadow"/><path class="ijjpqab8b"/><path class="gha40nb4p"/><path class="dg8n_kbjj"/><path class="mv9oj_cuu"/><path class="o8lfrlb9m wm-shine"/><path class="wm-deco yw3q-bb-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:avatar-penguin"} {...others} />);
}

export default Component;
