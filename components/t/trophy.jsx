import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/v/vlq958bii.css';
import '../../css/m/mirjr4bon.css';
import '../../css/q/q-73_14rz.css';
import '../../css/v/vw7td_-ft.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGLlBR3beH"><g class="v3_i3wktz"><path class="vlq958bii"/><path clip-rule="evenodd" class="mirjr4bon"/><path class="q-73_14rz"/><path class="vw7td_-ft"/></g></mask></defs><path mask="url(#SVGLlBR3beH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:trophy"} {...others} />);
}

export default Component;
