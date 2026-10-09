import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_vbgsb4a.css';
import '../../css/e/e4z-0xbtc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o_vbgsb4a"/><path class="e4z-0xbtc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:baby-20"} {...others} />);
}

export default Component;
