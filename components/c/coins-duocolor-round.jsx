import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j9rhjr-kz.css';
import '../../css/t/t0ppe21yd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j9rhjr-kz"/><path class="t0ppe21yd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:coins-duocolor-round"} {...others} />);
}

export default Component;
