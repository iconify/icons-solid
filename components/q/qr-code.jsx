import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ra04bqbjc.css';
import '../../css/w/wghcmjn7g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ra04bqbjc"/><path class="wghcmjn7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:qr-code"} {...others} />);
}

export default Component;
