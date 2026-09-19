import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/otobglbfo.css';
import '../../css/w/whfc_wblo.css';
import '../../css/a/amcfhfbkw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="otobglbfo"/><path class="whfc_wblo"/><path clip-rule="evenodd" class="amcfhfbkw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:microphone-2"} {...others} />);
}

export default Component;
