import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/y/ybve_bb-r.css';
import '../../css/p/pd3_r0b4h.css';
import '../../css/z/zdoh6ubhg.css';
import '../../css/o/ok9s4-bxw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGrNUBKc2i"><g class="rohhhzb0l"><path clip-rule="evenodd" class="ybve_bb-r"/><path class="pd3_r0b4h"/><path class="zdoh6ubhg"/><path class="ok9s4-bxw"/></g></mask></defs><path mask="url(#SVGrNUBKc2i)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:pesticide"} {...others} />);
}

export default Component;
