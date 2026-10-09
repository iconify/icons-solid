import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udezbf72w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="udezbf72w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sunny-intervals-48-bold"} {...others} />);
}

export default Component;
