import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wlaay_4cm.css';
import '../../css/f/f4g0gcbkr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wlaay_4cm"/><path class="f4g0gcbkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lock-20-bold"} {...others} />);
}

export default Component;
