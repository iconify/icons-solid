import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2zvukrgy.css';
import '../../css/n/nxke65bzq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u2zvukrgy"/><path class="nxke65bzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:glacier-20-bold"} {...others} />);
}

export default Component;
