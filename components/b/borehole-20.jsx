import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zkmn36bzs.css';
import '../../css/v/vwsuc6gog.css';
import '../../css/u/u3r8q7x0u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zkmn36bzs"/><path class="vwsuc6gog"/><path class="u3r8q7x0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:borehole-20"} {...others} />);
}

export default Component;
