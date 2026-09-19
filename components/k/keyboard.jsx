import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x36h_kb1w.css';
import '../../css/c/c8mqx_b2z.css';
import '../../css/w/w6quh6bnc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGf7qNrcCj"><g class="ft5dv1b6b"><path class="x36h_kb1w"/><path clip-rule="evenodd" class="c8mqx_b2z"/><path class="w6quh6bnc"/></g></mask></defs><path mask="url(#SVGf7qNrcCj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:keyboard"} {...others} />);
}

export default Component;
