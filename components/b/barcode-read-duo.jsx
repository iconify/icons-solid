import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hv74s5bof.css';
import '../../css/b/b4r8x-bpj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="hv74s5bof"/><path class="b4r8x-bpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:barcode-read-duo"} {...others} />);
}

export default Component;
