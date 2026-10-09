import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlqdhacda.css';
import '../../css/o/ojpm0hbkb.css';
import '../../css/p/p7necabgv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xlqdhacda"/><path class="ojpm0hbkb"/><path class="p7necabgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:garage-20-bold"} {...others} />);
}

export default Component;
