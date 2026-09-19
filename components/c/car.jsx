import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/emnpnubpe.css';
import '../../css/r/rc7xdsbbr.css';
import '../../css/o/ogzqfc22r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="emnpnubpe"/><path class="rc7xdsbbr"/><path class="ogzqfc22r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:car"} {...others} />);
}

export default Component;
