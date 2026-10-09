import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2x88vmhw.css';
import '../../css/p/pv9k0lrqk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i2x88vmhw"/><path class="pv9k0lrqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dam-20-bold"} {...others} />);
}

export default Component;
