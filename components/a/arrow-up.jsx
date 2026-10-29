import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/g4mjgdcir.css';
import '../../css/k/kiy4gqzzz.css';
import '../../css/x/x_dfjebxh.css';
import '../../css/l/logtg3i9u.css';
import '../../css/e/euhhz9uwc.css';
import '../../css/t/tv5yr4beu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="g4mjgdcir wm-shadow"/><path class="kiy4gqzzz"/><path class="x_dfjebxh"/><path class="logtg3i9u"/><path class="euhhz9uwc wm-shine"/><path class="tv5yr4beu wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:arrow-up"} {...others} />);
}

export default Component;
