import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lk6bicnte.css';
import '../../css/d/dh6tuqe-f.css';
import '../../css/t/tjb6i-jcq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lk6bicnte"/><path class="dh6tuqe-f"/><path class="tjb6i-jcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:computers-devices-electronics-battery-charge"} {...others} />);
}

export default Component;
