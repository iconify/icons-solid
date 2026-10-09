import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbu-t6btd.css';
import '../../css/t/t1lgjy0xv.css';
import '../../css/t/tl4cmrb7i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kbu-t6btd"/><path class="t1lgjy0xv"/><path class="tl4cmrb7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:x-square-48-bold"} {...others} />);
}

export default Component;
