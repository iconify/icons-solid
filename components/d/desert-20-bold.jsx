import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jq5ig7bzi.css';
import '../../css/z/zt4ibv4ad.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jq5ig7bzi"/><path class="zt4ibv4ad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:desert-20-bold"} {...others} />);
}

export default Component;
