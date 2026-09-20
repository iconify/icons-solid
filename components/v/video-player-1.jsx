import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/y/yhqbpfdii.css';
import '../../css/r/runi8cblq.css';
import '../../css/n/nt084-b1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="yhqbpfdii"/><path class="runi8cblq"/><path class="nt084-b1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:video-player-1"} {...others} />);
}

export default Component;
