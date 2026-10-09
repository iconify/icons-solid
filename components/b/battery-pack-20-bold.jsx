import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a12gsqhdy.css';
import '../../css/e/ec3h0kz8j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a12gsqhdy"/><path class="ec3h0kz8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-pack-20-bold"} {...others} />);
}

export default Component;
