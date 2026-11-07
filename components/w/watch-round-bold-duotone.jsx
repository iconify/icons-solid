import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r58n2hbum.css';
import '../../css/d/d6-v1qbmc.css';
import '../../css/s/s4h6spb2l.css';
import '../../css/b/bxbo83kzc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r58n2hbum"/><path class="d6-v1qbmc"/><path class="s4h6spb2l"/><path class="bxbo83kzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:watch-round-bold-duotone"} {...others} />);
}

export default Component;
