import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/md3qg6xkk.css';
import '../../css/v/v-m5jacix.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="md3qg6xkk"/><path class="v-m5jacix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrow-left-03"} {...others} />);
}

export default Component;
