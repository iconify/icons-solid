import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bt-0alp2o.css';
import '../../css/q/qrldk9bjb.css';
import '../../css/i/iqpkuk7ec.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bt-0alp2o"/><path class="qrldk9bjb"/><path class="iqpkuk7ec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-minus-48-bold"} {...others} />);
}

export default Component;
