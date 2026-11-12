import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlsi6_kti.css';
import '../../css/n/njlpr9bmf.css';
import '../../css/q/qbc0ipycg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xlsi6_kti"/><path class="njlpr9bmf"/><path class="qbc0ipycg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-grids-light"} {...others} />);
}

export default Component;
