import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vv07cqboy.css';
import '../../css/n/nwofm8dpb.css';
import '../../css/c/c_w4rabif.css';
import '../../css/u/uk_tlyd7k.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="vv07cqboy"/><path clip-rule="evenodd" class="nwofm8dpb"/><path class="c_w4rabif"/><path clip-rule="evenodd" class="uk_tlyd7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:archive-outline"} {...others} />);
}

export default Component;
