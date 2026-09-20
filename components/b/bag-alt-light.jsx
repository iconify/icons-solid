import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/q/q8l-bsm4k.css';
import '../../css/k/kmemqbcet.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="q8l-bsm4k"/><path class="kmemqbcet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:bag-alt-light"} {...others} />);
}

export default Component;
