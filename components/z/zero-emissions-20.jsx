import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/up69iwpxv.css';
import '../../css/o/oyfc2zkqj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="up69iwpxv"/><path class="oyfc2zkqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:zero-emissions-20"} {...others} />);
}

export default Component;
