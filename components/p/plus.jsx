import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/lrn23cnqw.css';
import '../../css/y/yg12610jv.css';
import '../../css/m/myuxcznyu.css';
import '../../css/w/wqkaw1p0w.css';
import '../../css/u/uyd6qvy3o.css';
import '../../css/a/aj1r45djd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="lrn23cnqw wm-shadow"/><path class="yg12610jv"/><path class="myuxcznyu"/><path class="wqkaw1p0w"/><path class="uyd6qvy3o wm-shine"/><path class="aj1r45djd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:plus"} {...others} />);
}

export default Component;
