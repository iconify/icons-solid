import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wupsqfb9m.css';
import '../../css/s/slmd-2blc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wupsqfb9m"/><path class="slmd-2blc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hot-air-balloon-20-bold"} {...others} />);
}

export default Component;
