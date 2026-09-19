import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/ddsnpbctj.css';
import '../../css/i/iosy5ibnu.css';
import '../../css/z/z2nswx2uv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ddsnpbctj"/><path clip-rule="evenodd" class="iosy5ibnu"/><path class="z2nswx2uv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:jack"} {...others} />);
}

export default Component;
