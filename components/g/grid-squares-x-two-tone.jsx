import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qbwvuyb5c.css';
import '../../css/v/v0ax72bur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qbwvuyb5c"/><path class="v0ax72bur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:grid-squares-x-two-tone"} {...others} />);
}

export default Component;
