import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uvb8mfzfd.css';
import '../../css/r/robaa__jz.css';
import '../../css/u/uktdfubjw.css';
import '../../css/a/alildeb5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="uvb8mfzfd wm-k"/><path class="robaa__jz"/><path class="uktdfubjw"/><path class="alildeb5p wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:heading-1"} {...others} />);
}

export default Component;
