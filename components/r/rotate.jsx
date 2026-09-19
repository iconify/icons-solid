import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/ji6bwbm_c.css';
import '../../css/g/gsaz2lbqg.css';
import '../../css/w/w0tt369dj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGg3Sutb0i"><g class="v3_i3wktz"><path class="ji6bwbm_c"/><path class="gsaz2lbqg"/><path class="w0tt369dj"/></g></mask></defs><path mask="url(#SVGg3Sutb0i)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:rotate"} {...others} />);
}

export default Component;
