import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny1ct12zc.css';
import '../../css/e/e--yctl3q.css';
import '../../css/c/cynz-yk1a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ny1ct12zc"/><path class="e--yctl3q"/><path class="cynz-yk1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:double-glazing-20"} {...others} />);
}

export default Component;
