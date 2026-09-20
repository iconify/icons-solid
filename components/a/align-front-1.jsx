import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rfort1kld.css';
import '../../css/v/ve1qelt5w.css';
import '../../css/d/dqskgibai.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="rfort1kld"/><path class="ve1qelt5w"/><path class="dqskgibai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:align-front-1"} {...others} />);
}

export default Component;
