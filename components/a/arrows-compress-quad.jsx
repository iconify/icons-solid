import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r2c1jibvw.css';
import '../../css/k/knjrw5bqb.css';
import '../../css/r/rbsfszbmm.css';
import '../../css/d/d2cw7ybte.css';
import '../../css/a/aq9o__kzs.css';
import '../../css/s/soz25nbkm.css';
import '../../css/n/na49v2s9g.css';
import '../../css/w/wald5eb4m.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="r2c1jibvw"/><path class="knjrw5bqb"/><path class="rbsfszbmm"/><path class="d2cw7ybte"/><path class="aq9o__kzs"/><path class="soz25nbkm"/><path class="na49v2s9g"/><path class="wald5eb4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:arrows-compress-quad"} {...others} />);
}

export default Component;
