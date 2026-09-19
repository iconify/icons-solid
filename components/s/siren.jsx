import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bybmr1b4l.css';
import '../../css/z/zweu-dnef.css';
import '../../css/j/jt7vshb3p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bybmr1b4l"/><path class="zweu-dnef"/><path class="jt7vshb3p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:siren"} {...others} />);
}

export default Component;
