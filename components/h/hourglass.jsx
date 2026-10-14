import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/k_6msqblp.css';
import '../../css/x/x39lywbmx.css';
import '../../css/c/cmekjibeu.css';
import '../../css/x/x9lf62b7r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="k_6msqblp"/><path class="x39lywbmx"/><path class="cmekjibeu"/><path class="x9lf62b7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:hourglass"} {...others} />);
}

export default Component;
