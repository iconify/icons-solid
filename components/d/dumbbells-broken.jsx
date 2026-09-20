import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zdvx-07sg.css';
import '../../css/n/nw9gl4b6x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zdvx-07sg"/><path class="nw9gl4b6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbells-broken"} {...others} />);
}

export default Component;
