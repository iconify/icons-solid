import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nn6_r74zf.css';
import '../../css/w/wt2ulisfj.css';
import '../../css/r/r7eqyl6hw.css';
import '../../css/i/inmv-9b3b.css';
import '../../css/z/zz5gtwb5w.css';
import '../../css/o/o2h76rh5a.css';
import '../../css/n/n985o1b6q.css';
import '../../css/b/b0abniypp.css';
import '../../css/o/osottlbvi.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nn6_r74zf"/><path class="wt2ulisfj"/><path class="r7eqyl6hw"/><path clip-rule="evenodd" class="inmv-9b3b"/><path class="zz5gtwb5w"/><path class="o2h76rh5a"/><path clip-rule="evenodd" class="n985o1b6q"/><path class="b0abniypp"/><path class="osottlbvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:volleyball"} {...others} />);
}

export default Component;
