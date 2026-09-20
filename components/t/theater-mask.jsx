import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kpix4o4kv.css';
import '../../css/q/qupfyq3om.css';
import '../../css/g/gqwz-j0vh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kpix4o4kv"/><path class="qupfyq3om"/><path class="gqwz-j0vh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:theater-mask"} {...others} />);
}

export default Component;
