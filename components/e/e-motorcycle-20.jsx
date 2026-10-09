import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8hrjq-xz.css';
import '../../css/u/uaje_hxks.css';
import '../../css/f/fybuv2jvo.css';
import '../../css/p/ppols2b6o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i8hrjq-xz"/><path class="uaje_hxks"/><path class="fybuv2jvo"/><path class="ppols2b6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:e-motorcycle-20"} {...others} />);
}

export default Component;
