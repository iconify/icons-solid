import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hr08b61pk.css';
import '../../css/d/d_fvrmbcp.css';
import '../../css/v/v2um02b8q.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="hr08b61pk"/><path class="d_fvrmbcp"/><path class="v2um02b8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lollypop-music-player"} {...others} />);
}

export default Component;
