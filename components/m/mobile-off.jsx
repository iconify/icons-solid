import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q109bpb0d.css';
import '../../css/p/p_fykdbnn.css';
import '../../css/m/mmqs85bbr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="q109bpb0d"/><path clip-rule="evenodd" class="p_fykdbnn"/><path class="mmqs85bbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:mobile-off"} {...others} />);
}

export default Component;
