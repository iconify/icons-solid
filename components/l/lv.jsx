import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m9zlor0uo.css';
import '../../css/t/trao390lb.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="m9zlor0uo"/><path class="trao390lb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:lv"} {...others} />);
}

export default Component;
