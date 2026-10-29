import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jrw1k6dse.css';
import '../../css/h/hgi6tu1ll.css';
import '../../css/b/b2hy81big.css';
import '../../css/j/jbflvebur.css';
import '../../css/h/h_4g86b_w.css';
import '../../css/s/s9w7lzbzh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="jrw1k6dse wm-shadow"/><path class="hgi6tu1ll"/><path class="b2hy81big"/><path class="jbflvebur"/><path class="h_4g86b_w wm-shine"/><path class="s9w7lzbzh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:undo"} {...others} />);
}

export default Component;
