import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/w72fwubfl.css';
import '../../css/p/pwcfd4buv.css';
import '../../css/p/pjf9atbzq.css';
import '../../css/h/hlwthdxqn.css';
import '../../css/o/o47crebme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="w72fwubfl wm-shadow"/><path class="pwcfd4buv"/><path class="pjf9atbzq"/><path class="hlwthdxqn"/><path class="o47crebme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-koala"} {...others} />);
}

export default Component;
