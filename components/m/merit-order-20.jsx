import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/km2fl-ght.css';
import '../../css/v/vurhcwkho.css';
import '../../css/r/rkgzl8y0y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="km2fl-ght"/><path class="vurhcwkho"/><path class="rkgzl8y0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:merit-order-20"} {...others} />);
}

export default Component;
