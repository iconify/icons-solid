import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qluwhuyur.css';
import '../../css/c/cp3-dvbfv.css';
import '../../css/i/ivfkh0bgy.css';
import '../../css/n/nzjls8dnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qluwhuyur"/><path class="cp3-dvbfv"/><path class="ivfkh0bgy"/><path class="nzjls8dnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-open-bold-duotone"} {...others} />);
}

export default Component;
