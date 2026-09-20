import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/x/xie0ipbtn.css';
import '../../css/m/m0_uv8bsz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="xie0ipbtn"/><path class="m0_uv8bsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:pen-1"} {...others} />);
}

export default Component;
