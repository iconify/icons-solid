import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/s/srxib6aqe.css';
import '../../css/w/wpfwgq37g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="srxib6aqe"/><path class="wpfwgq37g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:timer-10"} {...others} />);
}

export default Component;
