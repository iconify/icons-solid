import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cel9fwb6n.css';
import '../../css/w/wm33mhbpa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cel9fwb6n"/><path class="wm33mhbpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:transmission-virus-inhale"} {...others} />);
}

export default Component;
