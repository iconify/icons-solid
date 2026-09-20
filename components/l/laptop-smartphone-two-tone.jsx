import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ls35lps-u.css';
import '../../css/f/fo5gzql_k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ls35lps-u"/><path class="fo5gzql_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:laptop-smartphone-two-tone"} {...others} />);
}

export default Component;
