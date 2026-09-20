import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s1ezycb9d.css';
import '../../css/b/bw2p-ubhh.css';
import '../../css/n/n42lhgbyq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s1ezycb9d"/><path class="bw2p-ubhh"/><path class="n42lhgbyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chart-line-data"} {...others} />);
}

export default Component;
