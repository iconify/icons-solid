import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xuvpbxbtk.css';
import '../../css/o/od-p0spiz.css';
import '../../css/q/q8n9u3bhf.css';
import '../../css/t/tmi-7004z.css';
import '../../css/b/b6gruglaw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xuvpbxbtk"/><circle class="od-p0spiz"/><circle class="q8n9u3bhf"/><circle class="tmi-7004z"/><circle class="b6gruglaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:palette"} {...others} />);
}

export default Component;
