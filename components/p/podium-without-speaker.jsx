import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2pno_a1u.css';
import '../../css/m/mp1ra6pzn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u2pno_a1u"/><path class="mp1ra6pzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:podium-without-speaker"} {...others} />);
}

export default Component;
