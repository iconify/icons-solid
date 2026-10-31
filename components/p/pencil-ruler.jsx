import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hre033b1x.css';
import '../../css/v/v-pesfn0r.css';
import '../../css/e/eclt10bpq.css';
import '../../css/j/jqpkknzhq.css';
import '../../css/k/k1-_stb2u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hre033b1x wm-shadow"/><path class="v-pesfn0r"/><path class="eclt10bpq"/><path class="jqpkknzhq"/><path class="k1-_stb2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:pencil-ruler"} {...others} />);
}

export default Component;
