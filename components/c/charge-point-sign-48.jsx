import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbwxlclgf.css';
import '../../css/u/u5hq78bcq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lbwxlclgf"/><path class="u5hq78bcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charge-point-sign-48"} {...others} />);
}

export default Component;
