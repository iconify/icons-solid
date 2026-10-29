import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fh86zsybk.css';
import '../../css/b/b_x0yvbhh.css';
import '../../css/r/r0y4ez2qx.css';
import '../../css/a/a7amheb1w.css';
import '../../css/c/ctmau1ccj.css';
import '../../css/k/ku8s8wyil.css';
import '../../css/x/x0e9q4bew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="fh86zsybk wm-shadow"/><path class="b_x0yvbhh"/><path class="r0y4ez2qx"/><path class="a7amheb1w"/><path class="ctmau1ccj"/><path class="ku8s8wyil wm-shine"/><path class="wm-deco x0e9q4bew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:gingerbread-man"} {...others} />);
}

export default Component;
