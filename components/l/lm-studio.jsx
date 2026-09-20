import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s438j093n.css';
import '../../css/h/h1q6c4tla.css';
import '../../css/g/gb4ci7bcz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s438j093n"><path class="h1q6c4tla"/><path class="gb4ci7bcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:lm-studio"} {...others} />);
}

export default Component;
