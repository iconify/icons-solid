import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bc_yy0adh.css';
import '../../css/j/jgmiltbod.css';
import '../../css/m/m7w7hcbwu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bc_yy0adh"/><path class="jgmiltbod"/><path class="m7w7hcbwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-cut-line-duotone"} {...others} />);
}

export default Component;
