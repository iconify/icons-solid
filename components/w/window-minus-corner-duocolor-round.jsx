import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yv0shlb-w.css';
import '../../css/m/m09ld7m5v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yv0shlb-w"/><path class="m09ld7m5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:window-minus-corner-duocolor-round"} {...others} />);
}

export default Component;
