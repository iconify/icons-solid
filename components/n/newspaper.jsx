import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/al_jdya1p.css';
import '../../css/e/ezjocxztq.css';
import '../../css/k/ksjhfan6f.css';
import '../../css/v/vnmjnibma.css';
import '../../css/c/c6fh6tjah.css';
import '../../css/t/tgamvhtml.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="al_jdya1p wm-shadow"/><path class="ezjocxztq"/><path class="ksjhfan6f"/><path class="vnmjnibma"/><path class="c6fh6tjah"/><path class="tgamvhtml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:newspaper"} {...others} />);
}

export default Component;
