import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/po8d74wuq.css';
import '../../css/q/qq9-l9upr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="po8d74wuq"/><path class="qq9-l9upr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nodule-48-bold"} {...others} />);
}

export default Component;
