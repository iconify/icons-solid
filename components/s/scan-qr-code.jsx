import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kwun_emov.css';
import '../../css/x/xoxb-4ake.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kwun_emov"/><rect class="xoxb-4ake"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:scan-qr-code"} {...others} />);
}

export default Component;
