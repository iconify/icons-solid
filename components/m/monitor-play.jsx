import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yu2xnfbuu.css';
import '../../css/s/sqrypw5ws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yu2xnfbuu"/><path class="sqrypw5ws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:monitor-play"} {...others} />);
}

export default Component;
