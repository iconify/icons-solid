import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/krzm0-bqz.css';
import '../../css/l/le4wq9bhq.css';
import '../../css/z/zrg-nfbmx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="krzm0-bqz"/><path class="le4wq9bhq"/><path class="zrg-nfbmx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:computer-desk-03"} {...others} />);
}

export default Component;
