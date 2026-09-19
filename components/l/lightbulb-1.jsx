import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ogxepvf0r.css';
import '../../css/k/kszy58azx.css';
import '../../css/o/ojqphszdh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ogxepvf0r"/><path class="kszy58azx"/><path clip-rule="evenodd" class="ojqphszdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:lightbulb-1"} {...others} />);
}

export default Component;
