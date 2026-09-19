import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g1mq_3eus.css';
import '../../css/x/xln0-bxve.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="n1lsf0bnc"><path class="g1mq_3eus"/><path class="xln0-bxve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:pink"} {...others} />);
}

export default Component;
