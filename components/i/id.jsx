import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jhsaz8brf.css';
import '../../css/x/xha3m7bla.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="jhsaz8brf"/><path class="xha3m7bla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:id"} {...others} />);
}

export default Component;
