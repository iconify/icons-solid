import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dgf-cvvxa.css';
import '../../css/q/qcxsl-h-o.css';
import '../../css/g/gka1v-_ox.css';
import '../../css/j/j2t5gzipa.css';
import '../../css/n/ndwtv0bvv.css';
import '../../css/k/kj1_-2bqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dgf-cvvxa"/><path class="qcxsl-h-o"/><path class="gka1v-_ox"/><path class="j2t5gzipa"/><path class="ndwtv0bvv"/><path class="kj1_-2bqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:window-frame-bold-duotone"} {...others} />);
}

export default Component;
