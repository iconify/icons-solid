import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtodwymrs.css';
import '../../css/l/llc8bjvxe.css';
import '../../css/t/t73532b7t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xtodwymrs"/><path class="llc8bjvxe"/><path class="t73532b7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:penstock-20-bold"} {...others} />);
}

export default Component;
