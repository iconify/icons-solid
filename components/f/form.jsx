import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yz-sb3bgx.css';
import '../../css/w/wfvu3fb-g.css';
import '../../css/y/yglfexb7u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yz-sb3bgx"/><rect class="wfvu3fb-g"/><rect class="yglfexb7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:form"} {...others} />);
}

export default Component;
