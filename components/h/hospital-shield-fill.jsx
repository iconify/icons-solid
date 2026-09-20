import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6pf4lbun.css';
import '../../css/r/rqbyrwbza.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i6pf4lbun"/><path class="rqbyrwbza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:hospital-shield-fill"} {...others} />);
}

export default Component;
