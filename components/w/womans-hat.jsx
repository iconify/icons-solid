import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjnvxcb_s.css';
import '../../css/w/w8xhtacrs.css';
import '../../css/v/vzls9jb1j.css';
import '../../css/h/hqij3abcu.css';
import '../../css/u/u109zkb2d.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="rjnvxcb_s"/><path class="w8xhtacrs"/><path class="vzls9jb1j"/><path class="hqij3abcu"/><path class="u109zkb2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:womans-hat"} {...others} />);
}

export default Component;
