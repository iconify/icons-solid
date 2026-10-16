import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6vbh3spu.css';
import '../../css/k/kwnn45cyx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d6vbh3spu"/><path class="kwnn45cyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bell-snooze-20-bold"} {...others} />);
}

export default Component;
