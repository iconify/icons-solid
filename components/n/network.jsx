import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/d_gd9mb6l.css';
import '../../css/p/ph2kmcbim.css';
import '../../css/r/rz2-7ib2z.css';
import '../../css/p/pp7nkab3l.css';
import '../../css/k/kjw2pxb2m.css';
import '../../css/d/djrky3h5a.css';
import '../../css/d/d3x7osz9m.css';
import '../../css/g/g1rppbb9w.css';
import '../../css/f/fa7n5-bta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="d_gd9mb6l wm-shadow"/><path class="ph2kmcbim"/><path class="rz2-7ib2z"/><path class="pp7nkab3l"/><path class="kjw2pxb2m"/><path class="djrky3h5a"/><path class="d3x7osz9m"/><path class="g1rppbb9w wm-shine"/><path class="fa7n5-bta wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:network"} {...others} />);
}

export default Component;
