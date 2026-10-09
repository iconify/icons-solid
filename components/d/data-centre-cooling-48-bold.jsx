import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z46967big.css';
import '../../css/b/b1q-bhbwi.css';
import '../../css/k/kb-04bcrr.css';
import '../../css/i/iqtvs3bwv.css';
import '../../css/o/oi83qbwgh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z46967big"/><path class="b1q-bhbwi"/><path class="kb-04bcrr"/><path class="iqtvs3bwv"/><path class="oi83qbwgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:data-centre-cooling-48-bold"} {...others} />);
}

export default Component;
