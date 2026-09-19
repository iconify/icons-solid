import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hxgpq414k.css';
import '../../css/u/uf3oh5bzw.css';
import '../../css/p/p3o7oy_bq.css';
import '../../css/c/c70km2biw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hxgpq414k"/><path clip-rule="evenodd" class="uf3oh5bzw"/><path class="p3o7oy_bq"/><path clip-rule="evenodd" class="c70km2biw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:pig"} {...others} />);
}

export default Component;
