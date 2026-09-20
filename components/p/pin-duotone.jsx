import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/oajmuqbzh.css';
import '../../css/h/hdsz9zb_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="oajmuqbzh"/><path class="hdsz9zb_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pin-duotone"} {...others} />);
}

export default Component;
