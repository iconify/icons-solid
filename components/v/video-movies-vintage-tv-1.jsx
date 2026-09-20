import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bx2qpnbam.css';
import '../../css/i/iy_clibkk.css';
import '../../css/n/nxvj60bqk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bx2qpnbam"/><path class="iy_clibkk"/><path class="nxvj60bqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:video-movies-vintage-tv-1"} {...others} />);
}

export default Component;
