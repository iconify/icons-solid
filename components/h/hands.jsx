import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/o/on8qlmp3x.css';
import '../../css/r/r71t5ps3q.css';
import '../../css/m/m820zubuq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG1jhcucOG"><g class="rohhhzb0l"><circle class="on8qlmp3x"/><path class="r71t5ps3q"/><path class="m820zubuq"/></g></mask></defs><path mask="url(#SVG1jhcucOG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hands"} {...others} />);
}

export default Component;
