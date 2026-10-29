import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/s590w1oxl.css';
import '../../css/n/nnpko9blp.css';
import '../../css/y/ydds1rs9b.css';
import '../../css/d/d3cq13bvm.css';
import '../../css/m/mro9iybrf.css';
import '../../css/t/t20ne0f3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="s590w1oxl wm-shadow"/><path class="nnpko9blp"/><path class="ydds1rs9b"/><path class="d3cq13bvm"/><path class="mro9iybrf wm-shine"/><path class="t20ne0f3d wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:map"} {...others} />);
}

export default Component;
