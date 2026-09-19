import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-bb6ccxt.css';

const viewBox = {"width":2048,"height":2048};
const content = `<rect transform="translate(55.328 -99820.702)scale(96.7529)" class="k-bb6ccxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:task"} {...others} />);
}

export default Component;
