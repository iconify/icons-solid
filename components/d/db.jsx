import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w22_v0jqn.css';
import '../../css/l/lg_sgwbbl.css';
import '../../css/y/ym253vn8u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="w22_v0jqn"/><path class="lg_sgwbbl"/><path class="ym253vn8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:db"} {...others} />);
}

export default Component;
