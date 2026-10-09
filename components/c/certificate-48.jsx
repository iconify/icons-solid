import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ao6abl51c.css';
import '../../css/x/xn11esbqe.css';
import '../../css/u/umr1ykbuz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ao6abl51c"/><path class="xn11esbqe"/><path class="umr1ykbuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:certificate-48"} {...others} />);
}

export default Component;
