import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k0k1f7n8x.css';
import '../../css/b/bw2p-ubhh.css';
import '../../css/e/ecflcid7z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k0k1f7n8x"/><path class="bw2p-ubhh"/><path class="ecflcid7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chart-bubble"} {...others} />);
}

export default Component;
