import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fd7fxu0eo.css';
import '../../css/g/geplcma4c.css';
import '../../css/b/bwm5pk45n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fd7fxu0eo"/><path class="geplcma4c"/><path class="bwm5pk45n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:study-lamp"} {...others} />);
}

export default Component;
