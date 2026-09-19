import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_cwke7rf.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="n_cwke7rf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:mixcloud"} {...others} />);
}

export default Component;
