import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4rl_dmmq.css';
import '../../css/z/z1x0aebyd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r4rl_dmmq"/><path class="z1x0aebyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tidal-stream-turbine-20-bold"} {...others} />);
}

export default Component;
