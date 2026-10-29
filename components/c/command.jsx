import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k_d-r94pa.css';
import '../../css/f/f0oyr9bzb.css';
import '../../css/l/lmbuvdvtv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k_d-r94pa wm-k"/><path class="f0oyr9bzb wm-k"/><path class="lmbuvdvtv wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:command"} {...others} />);
}

export default Component;
