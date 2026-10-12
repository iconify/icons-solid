import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ur3m-8djy.css';
import '../../css/u/uvv6a-b1c.css';
import '../../css/u/ul72h2brt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ur3m-8djy"/><path class="uvv6a-b1c"/><path class="ul72h2brt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lathe-20"} {...others} />);
}

export default Component;
