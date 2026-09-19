import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2xa0wbnt.css';
import '../../css/k/k5kt1he2w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o2xa0wbnt"/><path class="k5kt1he2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:thunderstorm-sharp"} {...others} />);
}

export default Component;
