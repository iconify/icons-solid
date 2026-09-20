import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tq3id0t8d.css';
import '../../css/b/b8wm3g5kv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tq3id0t8d"/><path class="b8wm3g5kv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:diagram-project-two-tone"} {...others} />);
}

export default Component;
