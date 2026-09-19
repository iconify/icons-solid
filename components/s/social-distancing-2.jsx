import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p95tf12xy.css';
import '../../css/e/eztykdbtr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="p95tf12xy"/><path class="eztykdbtr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:social-distancing-2"} {...others} />);
}

export default Component;
