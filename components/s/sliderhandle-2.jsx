import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lm0y67cgx.css';
import '../../css/w/wvor-jbep.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="lm0y67cgx"/><path class="wvor-jbep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:sliderhandle-2"} {...others} />);
}

export default Component;
