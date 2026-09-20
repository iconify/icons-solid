import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/a/akxq_dj0t.css';
import '../../css/r/rczlb0blk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="akxq_dj0t"/><path class="rczlb0blk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:fingerprint-2"} {...others} />);
}

export default Component;
