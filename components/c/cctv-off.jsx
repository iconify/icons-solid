import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/djyajbbbq.css';
import '../../css/t/thkt3tbjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="djyajbbbq"/><path class="thkt3tbjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cctv-off"} {...others} />);
}

export default Component;
