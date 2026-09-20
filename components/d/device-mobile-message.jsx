import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/blminvtbg.css';
import '../../css/i/imucy6b8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="blminvtbg"/><path class="imucy6b8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-mobile-message"} {...others} />);
}

export default Component;
