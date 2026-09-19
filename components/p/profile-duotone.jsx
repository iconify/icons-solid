import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbqrvx45y.css';
import '../../css/m/mtuv6bbgk.css';
import '../../css/n/nbfqlubre.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rbqrvx45y"/><path class="mtuv6bbgk"/><circle class="nbfqlubre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:profile-duotone"} {...others} />);
}

export default Component;
