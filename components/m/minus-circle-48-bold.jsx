import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2neunb3u.css';
import '../../css/z/z_g0_6bob.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n2neunb3u"/><path class="z_g0_6bob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:minus-circle-48-bold"} {...others} />);
}

export default Component;
