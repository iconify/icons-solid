import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/in674-o-l.css';
import '../../css/q/q2tz-qbkt.css';
import '../../css/x/xx3p8gb2x.css';
import '../../css/s/s4vap8b1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="in674-o-l wm-shadow"/><path class="q2tz-qbkt wm-shadow"/><path class="xx3p8gb2x"/><path class="s4vap8b1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:key-round"} {...others} />);
}

export default Component;
