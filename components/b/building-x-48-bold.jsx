import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgo-bn5bm.css';
import '../../css/d/dsjehubcj.css';
import '../../css/s/syfylxqea.css';
import '../../css/u/uq11f0fet.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pgo-bn5bm"/><path class="dsjehubcj"/><path class="syfylxqea"/><path class="uq11f0fet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:building-x-48-bold"} {...others} />);
}

export default Component;
