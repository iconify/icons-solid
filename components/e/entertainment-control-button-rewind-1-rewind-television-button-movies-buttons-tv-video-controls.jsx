import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x84uwf13n.css';
import '../../css/h/hfxmj41do.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="x84uwf13n"/><path class="hfxmj41do"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:entertainment-control-button-rewind-1-rewind-television-button-movies-buttons-tv-video-controls"} {...others} />);
}

export default Component;
