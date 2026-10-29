import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/til9qab8e.css';
import '../../css/t/t4p7pljbu.css';
import '../../css/p/py87c4xao.css';
import '../../css/x/xeb6qewzm.css';
import '../../css/e/ebgwytbri.css';
import '../../css/r/rrw0s8brf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="til9qab8e wm-shadow"/><path class="t4p7pljbu"/><path class="py87c4xao"/><path class="xeb6qewzm"/><path class="ebgwytbri wm-shine"/><path class="rrw0s8brf wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:align-justify"} {...others} />);
}

export default Component;
