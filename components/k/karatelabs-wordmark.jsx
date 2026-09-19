import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swdppqbue.css';
import '../../css/e/e_lvdb_ov.css';
import '../../css/j/j7iar1btc.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="swdppqbue"/><path class="e_lvdb_ov"/><path class="j7iar1btc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:karatelabs-wordmark"} {...others} />);
}

export default Component;
