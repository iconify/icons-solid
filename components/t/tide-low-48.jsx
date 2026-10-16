import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxyna-beg.css';
import '../../css/g/gr-g1kq_m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pxyna-beg"/><path class="gr-g1kq_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tide-low-48"} {...others} />);
}

export default Component;
