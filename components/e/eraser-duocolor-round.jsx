import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zlh_l7b6b.css';
import '../../css/j/jmwua5bim.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zlh_l7b6b"/><path class="jmwua5bim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:eraser-duocolor-round"} {...others} />);
}

export default Component;
