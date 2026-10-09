import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ub1w7d4uf.css';
import '../../css/l/llee-cc9u.css';
import '../../css/b/bsr6ccb5m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ub1w7d4uf"/><path class="llee-cc9u"/><path class="bsr6ccb5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-meter-48"} {...others} />);
}

export default Component;
