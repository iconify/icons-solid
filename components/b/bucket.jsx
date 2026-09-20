import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/slt9h2sfr.css';
import '../../css/m/mb1qa7yge.css';
import '../../css/y/y_30nsbnm.css';
import '../../css/v/v02jaaceo.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/r/ret0owbdq.css';
import '../../css/u/uyy1jf0xu.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="slt9h2sfr"/><path class="mb1qa7yge"/><path class="y_30nsbnm"/><path class="v02jaaceo"/><g class="jn8qy4bru"><path class="ret0owbdq"/><path class="uyy1jf0xu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bucket"} {...others} />);
}

export default Component;
