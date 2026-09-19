import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vqeqzrb1o.css';
import '../../css/k/k-v1gmb1a.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="vqeqzrb1o"/><path class="k-v1gmb1a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:logo-juce"} {...others} />);
}

export default Component;
