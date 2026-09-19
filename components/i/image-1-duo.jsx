import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vp4z6eb0x.css';
import '../../css/j/juio3krmk.css';
import '../../css/v/v6nf5ubiq.css';
import '../../css/u/uqjcukbov.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="vp4z6eb0x"/><path class="juio3krmk"/><path class="v6nf5ubiq"/><path class="uqjcukbov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:image-1-duo"} {...others} />);
}

export default Component;
