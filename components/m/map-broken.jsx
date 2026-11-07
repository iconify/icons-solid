import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eurx18b7u.css';
import '../../css/i/iytgd1bjq.css';
import '../../css/e/ek9nj7bwf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="eurx18b7u"/><path class="iytgd1bjq"/><path class="ek9nj7bwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-broken"} {...others} />);
}

export default Component;
