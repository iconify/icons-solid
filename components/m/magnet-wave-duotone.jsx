import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v8ysor64h.css';
import '../../css/g/g2jm0o7ox.css';
import '../../css/m/mfousvcdk.css';
import '../../css/v/vpxodfbyq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="v8ysor64h"/><path class="g2jm0o7ox"/><path class="mfousvcdk"/><path class="vpxodfbyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:magnet-wave-duotone"} {...others} />);
}

export default Component;
