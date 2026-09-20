import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n4jvdkgos.css';
import '../../css/w/w1iwq6d3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n4jvdkgos"/><path class="w1iwq6d3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:banana"} {...others} />);
}

export default Component;
