import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqcd_1b7g.css';
import '../../css/n/nrssonjct.css';
import '../../css/v/vpcdfbb5g.css';
import '../../css/i/i_fa-oyvq.css';
import '../../css/f/fp6ouy0iq.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="cqcd_1b7g"><path class="nrssonjct"/><path class="vpcdfbb5g"/><path class="i_fa-oyvq"/><path class="fp6ouy0iq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:electron-wordmark"} {...others} />);
}

export default Component;
