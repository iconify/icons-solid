import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pof-48b5b.css';
import '../../css/j/je9239bfw.css';
import '../../css/t/t-nw4xpov.css';
import '../../css/m/mtrv0mdwe.css';
import '../../css/b/bipz22vit.css';
import '../../css/m/mf5ziac3q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pof-48b5b"/><path class="je9239bfw wm-k"/><path class="t-nw4xpov wm-k"/><path class="mtrv0mdwe wm-k"/><path class="bipz22vit wm-a"/><path class="mf5ziac3q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dental-chair-sketch"} {...others} />);
}

export default Component;
