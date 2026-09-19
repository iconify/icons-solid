import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x3swzzy8r.css';
import '../../css/b/b2_3ypb7j.css';
import '../../css/u/uxdt2um9m.css';
import '../../css/i/iw25-fbib.css';
import '../../css/l/ltc6sfbri.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x3swzzy8r"/><path clip-rule="evenodd" class="b2_3ypb7j"/><path clip-rule="evenodd" class="uxdt2um9m"/><path clip-rule="evenodd" class="iw25-fbib"/><path class="ltc6sfbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:ship-water"} {...others} />);
}

export default Component;
