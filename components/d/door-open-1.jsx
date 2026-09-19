import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q-13c-bnp.css';
import '../../css/n/nlpiaqbad.css';
import '../../css/x/xgpgdkb0k.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="q-13c-bnp"/><path class="nlpiaqbad"/><path class="xgpgdkb0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:door-open-1"} {...others} />);
}

export default Component;
