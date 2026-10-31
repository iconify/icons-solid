import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wdhu_4bza.css';
import '../../css/s/s6_bukz9h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wdhu_4bza"/><path class="s6_bukz9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:satellite-dish-duocolor-round"} {...others} />);
}

export default Component;
