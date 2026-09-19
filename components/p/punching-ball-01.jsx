import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cbr0shbpp.css';
import '../../css/t/tqi_khm-q.css';
import '../../css/i/ilxf184hs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cbr0shbpp"/><path class="tqi_khm-q"/><path class="ilxf184hs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:punching-ball-01"} {...others} />);
}

export default Component;
