import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bryv9-bhw.css';
import '../../css/e/eakappb5q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bryv9-bhw"/><path class="eakappb5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rack-and-pinion-20-bold"} {...others} />);
}

export default Component;
