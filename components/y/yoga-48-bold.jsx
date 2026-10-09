import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytj2ecx0x.css';
import '../../css/l/llz863bas.css';
import '../../css/g/go7r4eb5h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ytj2ecx0x"/><path class="llz863bas"/><path class="go7r4eb5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:yoga-48-bold"} {...others} />);
}

export default Component;
