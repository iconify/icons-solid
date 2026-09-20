import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/onbnhhb6h.css';
import '../../css/v/vilqbrbet.css';
import '../../css/c/c8b73tuui.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="onbnhhb6h"/><path class="vilqbrbet"/><path class="c8b73tuui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:gesture-double-tap"} {...others} />);
}

export default Component;
