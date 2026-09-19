import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hi1z_x5rh.css';
import '../../css/m/mwxtuxbnw.css';
import '../../css/f/f-y26nqzk.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="hi1z_x5rh"/><path class="mwxtuxbnw"/><path class="f-y26nqzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:nr"} {...others} />);
}

export default Component;
