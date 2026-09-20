import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t5amry4cl.css';
import '../../css/c/c0zi5697p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t5amry4cl"/><path class="c0zi5697p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:map-pin-search-two-tone"} {...others} />);
}

export default Component;
