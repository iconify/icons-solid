import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h4ip7lbpf.css';
import '../../css/s/s5vktnbeo.css';
import '../../css/u/unskt_bda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="h4ip7lbpf"/><path class="s5vktnbeo"/><path class="unskt_bda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-lock"} {...others} />);
}

export default Component;
