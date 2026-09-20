import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/i936e-doz.css';
import '../../css/h/h7ggax-wi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="i936e-doz"/><path class="h7ggax-wi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:info-light"} {...others} />);
}

export default Component;
