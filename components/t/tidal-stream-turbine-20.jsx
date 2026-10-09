import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qiv8dnhip.css';
import '../../css/v/v5b4nab0d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qiv8dnhip"/><path class="v5b4nab0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tidal-stream-turbine-20"} {...others} />);
}

export default Component;
