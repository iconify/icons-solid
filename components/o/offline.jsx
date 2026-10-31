import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/djtfmqb8g.css';
import '../../css/t/t_w_bebfk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="djtfmqb8g"/><path class="t_w_bebfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:offline"} {...others} />);
}

export default Component;
