import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0rewwboe.css';
import '../../css/r/rwf94xd_g.css';
import '../../css/a/axl75o_4d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="d0rewwboe"/><path class="rwf94xd_g"/><path class="axl75o_4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:soil-moisture-global"} {...others} />);
}

export default Component;
