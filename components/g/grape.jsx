import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/he7fpcbuw.css';
import '../../css/u/uunuyzbch.css';
import '../../css/u/u_zkbrbcy.css';
import '../../css/e/e_-fq76af.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="he7fpcbuw wm-k"/><path class="uunuyzbch wm-a"/><path class="u_zkbrbcy"/><path class="e_-fq76af"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:grape"} {...others} />);
}

export default Component;
