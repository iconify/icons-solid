import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/suzuvqbwa.css';
import '../../css/g/g_y-a9bgh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="suzuvqbwa"/><path class="g_y-a9bgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notebook-minimalistic-broken"} {...others} />);
}

export default Component;
