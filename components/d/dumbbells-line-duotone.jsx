import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zdvx-07sg.css';
import '../../css/f/fjxo0tfbi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zdvx-07sg"/><path class="fjxo0tfbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbells-line-duotone"} {...others} />);
}

export default Component;
