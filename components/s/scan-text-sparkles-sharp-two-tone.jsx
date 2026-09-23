import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pvq2a3bnf.css';
import '../../css/x/x39lujbyx.css';
import '../../css/c/c6upwkbge.css';
import '../../css/c/ceqt8o39a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="pvq2a3bnf"/><path class="x39lujbyx"/><path class="c6upwkbge"/><path class="ceqt8o39a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:scan-text-sparkles-sharp-two-tone"} {...others} />);
}

export default Component;
