import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o8nln54oz.css';
import '../../css/y/ywouhfjsv.css';
import '../../css/d/ds9l5ybls.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="o8nln54oz"/><circle class="ywouhfjsv"/><path class="ds9l5ybls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:entertainment-music-note-2-music-audio-note"} {...others} />);
}

export default Component;
