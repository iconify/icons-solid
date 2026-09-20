import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ykke-tbjv.css';
import '../../css/h/hpjlkqbqu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ykke-tbjv"/><path class="hpjlkqbqu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:history"} {...others} />);
}

export default Component;
