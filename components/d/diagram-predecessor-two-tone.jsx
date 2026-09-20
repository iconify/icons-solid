import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/awd2mzbze.css';
import '../../css/f/fvps8cbgi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="awd2mzbze"/><path class="fvps8cbgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:diagram-predecessor-two-tone"} {...others} />);
}

export default Component;
