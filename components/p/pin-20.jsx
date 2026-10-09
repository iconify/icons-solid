import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8fvfdcfq.css';
import '../../css/n/n9js5qbjq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m8fvfdcfq"/><path class="n9js5qbjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pin-20"} {...others} />);
}

export default Component;
