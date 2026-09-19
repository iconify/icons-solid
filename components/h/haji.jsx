import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sbieo1jys.css';
import '../../css/p/p7cl2h8tx.css';
import '../../css/j/jsjl7cbxk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="sbieo1jys"/><path class="p7cl2h8tx"/><path class="jsjl7cbxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:haji"} {...others} />);
}

export default Component;
