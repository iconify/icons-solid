import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2ejnib6s.css';
import '../../css/l/lmq15twty.css';
import '../../css/r/r2nbzfjyr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h2ejnib6s"/><path class="lmq15twty"/><path class="r2nbzfjyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:small-wind-turbine-48-bold"} {...others} />);
}

export default Component;
