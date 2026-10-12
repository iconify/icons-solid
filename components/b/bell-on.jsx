import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q5tmjxbgs.css';
import '../../css/w/ww2lb7oho.css';
import '../../css/v/vr8uhpscu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q5tmjxbgs"/><path class="ww2lb7oho"/><path class="vr8uhpscu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bell-on"} {...others} />);
}

export default Component;
