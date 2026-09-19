import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/si_h8nlvt.css';
import '../../css/i/i817x4i-m.css';
import '../../css/b/bt2vhjbuk.css';
import '../../css/e/e6sihfv7n.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="si_h8nlvt"/><path class="i817x4i-m"/><path class="bt2vhjbuk"/><path class="e6sihfv7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:printer"} {...others} />);
}

export default Component;
