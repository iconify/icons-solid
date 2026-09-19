import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/r/ruz3jronq.css';
import '../../css/o/o7-mq32hy.css';
import '../../css/p/pv49lt1rs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGdRJRtdZX"><g class="rohhhzb0l"><path class="ruz3jronq"/><path class="o7-mq32hy"/><path class="pv49lt1rs"/></g></mask></defs><path mask="url(#SVGdRJRtdZX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:camera-four"} {...others} />);
}

export default Component;
