import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1lh69b9o.css';
import '../../css/j/jzanc6bsn.css';
import '../../css/b/bw2p-ubhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l1lh69b9o"/><path class="jzanc6bsn"/><path class="bw2p-ubhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chart-stacked"} {...others} />);
}

export default Component;
