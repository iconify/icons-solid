import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/xm80o4b2a.css';
import '../../css/k/kpi7w9prg.css';
import '../../css/d/dx_hcswmk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpPeDT33j"><g class="rohhhzb0l"><path class="xm80o4b2a"/><circle class="kpi7w9prg"/><path class="dx_hcswmk"/></g></mask></defs><path mask="url(#SVGpPeDT33j)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:watch-one"} {...others} />);
}

export default Component;
