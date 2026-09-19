import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/v/v7o9pdttn.css';
import '../../css/k/kx53vyikr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGv0fEdduZ"><g class="v3_i3wktz"><path class="v7o9pdttn"/><path class="kx53vyikr"/></g></mask></defs><path mask="url(#SVGv0fEdduZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:expand-down"} {...others} />);
}

export default Component;
