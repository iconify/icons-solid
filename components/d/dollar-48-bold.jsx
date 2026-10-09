import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgom5jd5t.css';
import '../../css/x/xpq7xwfiv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dgom5jd5t"/><path class="xpq7xwfiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dollar-48-bold"} {...others} />);
}

export default Component;
