import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tybcrmi-m.css';
import '../../css/b/bsvdiixhm.css';
import '../../css/r/r_9lwu93i.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="tybcrmi-m"><path class="bsvdiixhm"/><path class="r_9lwu93i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:stylus"} {...others} />);
}

export default Component;
