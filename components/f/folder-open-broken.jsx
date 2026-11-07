import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nrv9p_b5h.css';
import '../../css/j/j8r4okiod.css';
import '../../css/s/s0kdq1bqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nrv9p_b5h"/><path class="j8r4okiod"/><path class="s0kdq1bqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-open-broken"} {...others} />);
}

export default Component;
