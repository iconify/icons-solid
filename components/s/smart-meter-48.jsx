import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lw53-sbdu.css';
import '../../css/y/ymi4owbyw.css';
import '../../css/f/frfktfbcq.css';
import '../../css/z/zczeh0h7o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lw53-sbdu"/><path class="ymi4owbyw"/><path class="frfktfbcq"/><path class="zczeh0h7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-meter-48"} {...others} />);
}

export default Component;
