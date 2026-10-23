import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lb08ifx0d.css';
import '../../css/j/jmfcuc9vp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lb08ifx0d"/><path class="jmfcuc9vp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:cctv-off"} {...others} />);
}

export default Component;
