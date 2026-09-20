import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/utgs_bbxu.css';
import '../../css/r/rc9hhabvi.css';
import '../../css/c/cdnnv50mv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="utgs_bbxu"/><path class="rc9hhabvi"/><path class="cdnnv50mv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:home-trend-down"} {...others} />);
}

export default Component;
