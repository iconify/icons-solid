import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qbwvuyb5c.css';
import '../../css/y/yxri0vbpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qbwvuyb5c"/><path class="yxri0vbpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:grid-squares-check-duotone"} {...others} />);
}

export default Component;
