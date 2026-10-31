import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cyjw215jy.css';
import '../../css/w/wnz-pw0la.css';
import '../../css/t/tgzwl3bqk.css';
import '../../css/n/nbjzccc-a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y9tr6bcfx"><path class="cyjw215jy"/><path class="wnz-pw0la"/><path class="tgzwl3bqk"/><path class="nbjzccc-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:grumpy-cat"} {...others} />);
}

export default Component;
