import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygoozhsqh.css';
import '../../css/j/jjv4m6b-s.css';
import '../../css/f/fylhtkbms.css';
import '../../css/g/gpgqfdbap.css';
import '../../css/a/a79tt-b_j.css';
import '../../css/e/ep9tu-o-e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ygoozhsqh"/><path class="jjv4m6b-s"/><path class="fylhtkbms"/><path class="gpgqfdbap"/><path class="a79tt-b_j"/><path class="ep9tu-o-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pagoda-20-bold"} {...others} />);
}

export default Component;
