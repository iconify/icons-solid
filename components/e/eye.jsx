import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qoy7a5zoz.css';
import '../../css/i/iwg7_kb7o.css';
import '../../css/q/q64b23bbs.css';
import '../../css/o/oj_beqbbs.css';
import '../../css/v/v386zx6vc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qoy7a5zoz wm-shadow"/><path class="iwg7_kb7o"/><path class="q64b23bbs"/><path class="oj_beqbbs"/><path class="v386zx6vc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:eye"} {...others} />);
}

export default Component;
