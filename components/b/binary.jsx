import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n0p4rlb9a.css';
import '../../css/u/u40auj6vj.css';
import '../../css/t/tz3moq2rq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="n0p4rlb9a wm-shadow"/><path class="u40auj6vj wm-shadow"/><path class="tz3moq2rq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:binary"} {...others} />);
}

export default Component;
