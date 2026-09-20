import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d_80qac3l.css';
import '../../css/r/rl47drbbh.css';
import '../../css/t/tcjkky78a.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="d_80qac3l"/><path class="rl47drbbh"/><path class="tcjkky78a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:triangle-flag"} {...others} />);
}

export default Component;
