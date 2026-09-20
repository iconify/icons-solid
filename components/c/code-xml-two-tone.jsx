import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sfbfre4oy.css';
import '../../css/n/nm76pbt0e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sfbfre4oy"/><path class="nm76pbt0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:code-xml-two-tone"} {...others} />);
}

export default Component;
