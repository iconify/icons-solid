import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gmk1bhgwk.css';
import '../../css/g/gum7tibxa.css';
import '../../css/r/rmlatf6un.css';
import '../../css/i/i0ecgc6dl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gmk1bhgwk"/><path class="gum7tibxa"/><path class="rmlatf6un"/><path class="i0ecgc6dl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:canvas"} {...others} />);
}

export default Component;
