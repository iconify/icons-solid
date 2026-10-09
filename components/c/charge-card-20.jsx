import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abo8mtx2l.css';
import '../../css/r/ra-v9ybun.css';
import '../../css/v/vrssy_bnt.css';
import '../../css/r/rdtqoi99p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="abo8mtx2l"/><path class="ra-v9ybun"/><path class="vrssy_bnt"/><path class="rdtqoi99p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charge-card-20"} {...others} />);
}

export default Component;
