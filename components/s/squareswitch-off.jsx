import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v7w_yx9xg.css';
import '../../css/m/moubh5bia.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="v7w_yx9xg"/><path class="moubh5bia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:squareswitch-off"} {...others} />);
}

export default Component;
