import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k6y8f8bcv.css';
import '../../css/r/rk0e0ccfm.css';
import '../../css/c/cewph5ymu.css';

const viewBox = {"width":160,"height":160};
const content = `<g class="ft5dv1b6b"><path class="k6y8f8bcv"/><path class="rk0e0ccfm"/><path class="cewph5ymu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:bytebase"} {...others} />);
}

export default Component;
