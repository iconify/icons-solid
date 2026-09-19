import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h165r_jwh.css';
import '../../css/p/p783iebym.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><circle class="h165r_jwh"/><path class="p783iebym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:logo-reason"} {...others} />);
}

export default Component;
