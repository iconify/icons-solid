import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/p5141kjgf.css';
import '../../css/i/izlsm_kiq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="p5141kjgf"/><path class="izlsm_kiq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:calendar-add-light"} {...others} />);
}

export default Component;
