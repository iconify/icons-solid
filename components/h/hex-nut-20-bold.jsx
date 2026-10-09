import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7nqvkavv.css';
import '../../css/b/bu587_boe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s7nqvkavv"/><path class="bu587_boe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hex-nut-20-bold"} {...others} />);
}

export default Component;
