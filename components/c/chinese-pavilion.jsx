import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/xg8pt7htm.css';
import '../../css/x/x8ll_eb0k.css';
import '../../css/f/fag8nwoln.css';
import '../../css/u/uov2v7y7s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG12PneXIR"><g class="rohhhzb0l"><path class="xg8pt7htm"/><path class="x8ll_eb0k"/><path class="fag8nwoln"/><path class="uov2v7y7s"/></g></mask></defs><path mask="url(#SVG12PneXIR)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:chinese-pavilion"} {...others} />);
}

export default Component;
