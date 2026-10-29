import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tk59wev6l.css';
import '../../css/s/sydq02bwc.css';
import '../../css/o/o1rpdhb-f.css';
import '../../css/t/trwe0wmdn.css';
import '../../css/i/ifcpdu-3e.css';
import '../../css/h/h_bj8bbjm.css';
import '../../css/r/rvjeglbdo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="tk59wev6l wm-shadow"/><path class="sydq02bwc"/><path class="o1rpdhb-f"/><path class="trwe0wmdn"/><path class="ifcpdu-3e wm-shine"/><path class="h_bj8bbjm wm-deco"/><path class="rvjeglbdo wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:book-marked"} {...others} />);
}

export default Component;
