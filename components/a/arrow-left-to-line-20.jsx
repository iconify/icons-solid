import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zhl8dp5hn.css';
import '../../css/n/nb9mp9bsr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zhl8dp5hn"/><path class="nb9mp9bsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-left-to-line-20"} {...others} />);
}

export default Component;
