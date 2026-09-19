import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xstgp02xk.css';
import '../../css/t/tn_hnfb5m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xstgp02xk"/><path class="tn_hnfb5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:linux-alt"} {...others} />);
}

export default Component;
