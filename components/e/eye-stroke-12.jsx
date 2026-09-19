import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/klebjebfq.css';
import '../../css/s/s2fa1xbkc.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="h01tyzbfu"><circle class="klebjebfq"/><path class="s2fa1xbkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:eye-stroke-12"} {...others} />);
}

export default Component;
