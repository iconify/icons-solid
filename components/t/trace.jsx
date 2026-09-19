import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/w/w14uhobpy.css';
import '../../css/y/yltrj23_b.css';
import '../../css/x/x94m28bkr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGSuWPfc9M"><g class="v3_i3wktz"><path class="w14uhobpy"/><path class="yltrj23_b"/><path class="x94m28bkr"/></g></mask></defs><path mask="url(#SVGSuWPfc9M)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:trace"} {...others} />);
}

export default Component;
