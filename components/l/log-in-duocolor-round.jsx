import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/slkd4ybpr.css';
import '../../css/x/x7wdoublu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="slkd4ybpr"/><path class="x7wdoublu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:log-in-duocolor-round"} {...others} />);
}

export default Component;
