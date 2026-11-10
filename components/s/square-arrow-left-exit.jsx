import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qaykyo7wf.css';
import '../../css/y/ymu6rxbdp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qaykyo7wf"/><path class="ymu6rxbdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:square-arrow-left-exit"} {...others} />);
}

export default Component;
