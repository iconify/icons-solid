import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iixfqsbra.css';
import '../../css/h/h0lo410vx.css';
import '../../css/m/mt37ukw5j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iixfqsbra"/><path class="h0lo410vx"/><path class="mt37ukw5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-station-20"} {...others} />);
}

export default Component;
