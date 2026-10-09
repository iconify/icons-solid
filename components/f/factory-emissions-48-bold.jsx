import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yc93bwpoh.css';
import '../../css/s/sc1f8rb_h.css';
import '../../css/m/mo7b8rbns.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yc93bwpoh"/><path class="sc1f8rb_h"/><path class="mo7b8rbns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:factory-emissions-48-bold"} {...others} />);
}

export default Component;
