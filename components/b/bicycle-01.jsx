import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qlu58ik7m.css';
import '../../css/a/assxj4gal.css';
import '../../css/x/xzjhvcb1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qlu58ik7m"/><path class="assxj4gal"/><path class="xzjhvcb1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bicycle-01"} {...others} />);
}

export default Component;
