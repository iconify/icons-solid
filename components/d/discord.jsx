import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgy2bfb1z.css';
import '../../css/u/uyj_e1b4g.css';
import '../../css/d/dw4u2gb_w.css';
import '../../css/u/u33y14bfr.css';

const viewBox = {"width":72,"height":72};
const content = `<path clip-rule="evenodd" class="qgy2bfb1z"/><path clip-rule="evenodd" class="uyj_e1b4g"/><path class="dw4u2gb_w"/><path class="u33y14bfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:discord"} {...others} />);
}

export default Component;
