import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yu2xnfbuu.css';
import '../../css/w/wuncz1tfv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yu2xnfbuu"/><path class="wuncz1tfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:monitor-up"} {...others} />);
}

export default Component;
