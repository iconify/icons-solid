import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/mhkr93b6x.css';
import '../../css/x/xe173sbxe.css';
import '../../css/f/f-875cspz.css';
import '../../css/v/v3g6xoxym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="mhkr93b6x"/><path class="xe173sbxe"/><path class="f-875cspz"/><circle class="v3g6xoxym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:kettlebell"} {...others} />);
}

export default Component;
