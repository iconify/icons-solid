import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w01qq6qdq.css';
import '../../css/m/m_r-rybts.css';
import '../../css/u/uvd1g15ov.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="rotate(-90 10 8)" class="bi12bsetm"><path class="w01qq6qdq"/><circle class="m_r-rybts"/><path class="uvd1g15ov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:harddrive"} {...others} />);
}

export default Component;
