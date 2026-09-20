import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fv_02cc4d.css';
import '../../css/a/ag4bb1_1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="fv_02cc4d"/><path class="ag4bb1_1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:media-playlist-add-next"} {...others} />);
}

export default Component;
