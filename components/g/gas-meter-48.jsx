import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ub1w7d4uf.css';
import '../../css/l/llee-cc9u.css';
import '../../css/x/xkf41wbfs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ub1w7d4uf"/><path class="llee-cc9u"/><path class="xkf41wbfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-meter-48"} {...others} />);
}

export default Component;
