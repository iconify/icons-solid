import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/arpm_bbij.css';
import '../../css/v/v0t8ctopr.css';
import '../../css/k/k0ut41rtn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="arpm_bbij"/><path class="v0t8ctopr"/><path class="k0ut41rtn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-fox"} {...others} />);
}

export default Component;
