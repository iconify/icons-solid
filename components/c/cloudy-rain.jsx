import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vx-ffrb6n.css';
import '../../css/d/dbt_h9efp.css';
import '../../css/l/lu3gphbdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vx-ffrb6n"/><path class="dbt_h9efp"/><path class="lu3gphbdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:cloudy-rain"} {...others} />);
}

export default Component;
