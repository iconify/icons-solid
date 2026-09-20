import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/svt5_wl-j.css';
import '../../css/e/ekk1nn8cl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="svt5_wl-j"/><path class="ekk1nn8cl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:payment-recieve-7"} {...others} />);
}

export default Component;
