import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/c/cd77q6u4q.css';
import '../../css/f/fzm2rccme.css';
import '../../css/p/p_61p5bej.css';
import '../../css/w/wb1h-68-f.css';
import '../../css/t/t6-8_dbpu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPaaJEb4Z"><g class="rohhhzb0l"><path class="cd77q6u4q"/><path class="fzm2rccme"/><path class="p_61p5bej"/><path class="wb1h-68-f"/><path class="t6-8_dbpu"/></g></mask></defs><path mask="url(#SVGPaaJEb4Z)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:medicine-bottle"} {...others} />);
}

export default Component;
