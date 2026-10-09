import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpob966an.css';
import '../../css/k/kuw8fyi7e.css';
import '../../css/b/bej424b8e.css';
import '../../css/l/lmd5ijbas.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cpob966an"/><path class="kuw8fyi7e"/><path class="bej424b8e"/><path class="lmd5ijbas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:water-wheel-48-bold"} {...others} />);
}

export default Component;
