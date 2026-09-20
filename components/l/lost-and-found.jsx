import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z4-uwkb9v.css';
import '../../css/c/coa9_4bzy.css';
import '../../css/s/s831j315p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="z4-uwkb9v"/><path class="coa9_4bzy"/><path class="s831j315p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:lost-and-found"} {...others} />);
}

export default Component;
