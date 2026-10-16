import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xedufpf4g.css';
import '../../css/j/j3e-87b3r.css';
import '../../css/i/imoeebb7h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xedufpf4g"/><path class="j3e-87b3r"/><path class="imoeebb7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:emissions-trading-48"} {...others} />);
}

export default Component;
