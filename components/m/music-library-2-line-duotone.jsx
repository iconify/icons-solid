import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vnsop5_4w.css';
import '../../css/j/je9pe87ui.css';
import '../../css/e/ea_31gbnm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vnsop5_4w"/><path class="je9pe87ui"/><path class="ea_31gbnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-library-2-line-duotone"} {...others} />);
}

export default Component;
