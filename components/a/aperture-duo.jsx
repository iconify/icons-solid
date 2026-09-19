import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/efiimf6-i.css';
import '../../css/o/oioyh58qn.css';
import '../../css/t/t2b5ptbsb.css';
import '../../css/f/ft5gu85-b.css';
import '../../css/c/cuyftmbhm.css';
import '../../css/a/a9cpe0bdt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="efiimf6-i"/><path class="oioyh58qn"/><path class="t2b5ptbsb"/><path class="ft5gu85-b"/><path class="cuyftmbhm"/><path class="a9cpe0bdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:aperture-duo"} {...others} />);
}

export default Component;
