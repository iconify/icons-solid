import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/tbnji5bns.css';
import '../../css/a/a_wofybcr.css';
import '../../css/e/ewf0-bb4e.css';
import '../../css/j/jc_ebqbze.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="tbnji5bns"/><path class="a_wofybcr"/><path class="ewf0-bb4e"/><path class="jc_ebqbze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:trending-content"} {...others} />);
}

export default Component;
