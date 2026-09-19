import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/egg57x-vu.css';
import '../../css/f/fmxluu0lj.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="egg57x-vu"/><path class="fmxluu0lj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:random-1dice"} {...others} />);
}

export default Component;
