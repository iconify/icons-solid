import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ipkd9vbgw.css';
import '../../css/t/thjectbkq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ipkd9vbgw"/><path class="thjectbkq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:thermometer-sun"} {...others} />);
}

export default Component;
