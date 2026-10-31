import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5vhwtynz.css';
import '../../css/a/a9r31u7se.css';
import '../../css/w/weg23q2cc.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="t5vhwtynz"/><path class="a9r31u7se"/><path class="weg23q2cc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:am"} {...others} />);
}

export default Component;
