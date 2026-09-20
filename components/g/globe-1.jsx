import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/j/j60x4ibro.css';
import '../../css/k/kuluz7b6w.css';
import '../../css/h/hpt2qmxzh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="j60x4ibro"/><path class="kuluz7b6w"/><path class="hpt2qmxzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:globe-1"} {...others} />);
}

export default Component;
