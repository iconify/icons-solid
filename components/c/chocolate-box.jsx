import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nlwenabsa.css';
import '../../css/v/v4c1xtb6h.css';
import '../../css/b/bdpci9jbw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="nlwenabsa"/><path class="v4c1xtb6h"/><path class="bdpci9jbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:chocolate-box"} {...others} />);
}

export default Component;
