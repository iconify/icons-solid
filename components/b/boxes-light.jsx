import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/w/w1ng5qv0n.css';
import '../../css/v/vurhcqbxv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="w1ng5qv0n"/><path class="vurhcqbxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:boxes-light"} {...others} />);
}

export default Component;
