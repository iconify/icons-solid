import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzr0hm98u.css';
import '../../css/z/zoam-0bdz.css';
import '../../css/f/fl-um2bwn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zzr0hm98u"/><path class="zoam-0bdz"/><path class="fl-um2bwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cement-plant-20"} {...others} />);
}

export default Component;
