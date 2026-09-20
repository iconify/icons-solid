import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/sbqf8lmdc.css';
import '../../css/n/n07e_fb4s.css';
import '../../css/x/xhvupobvv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="sbqf8lmdc"/><path class="n07e_fb4s"/><path class="xhvupobvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:video-close-captioning"} {...others} />);
}

export default Component;
