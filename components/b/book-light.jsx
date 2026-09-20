import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/sdrauacav.css';
import '../../css/q/qtzbrdlmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="sdrauacav"/><path class="qtzbrdlmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:book-light"} {...others} />);
}

export default Component;
