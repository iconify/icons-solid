import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hfzzsqbvr.css';
import '../../css/u/u3sozlbma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hfzzsqbvr"/><path class="u3sozlbma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:receipt-dollar"} {...others} />);
}

export default Component;
