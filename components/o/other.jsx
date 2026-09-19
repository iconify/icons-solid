import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/b/bub5ysbln.css';
import '../../css/w/w2tzu254s.css';
import '../../css/p/pzccn-q-b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="bub5ysbln"/><path class="w2tzu254s"/><path class="pzccn-q-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:other"} {...others} />);
}

export default Component;
