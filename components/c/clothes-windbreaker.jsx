import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yfmnn51un.css';
import '../../css/v/vwm56ql2p.css';
import '../../css/b/bu86gfbrw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yfmnn51un"/><path class="vwm56ql2p"/><path class="bu86gfbrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:clothes-windbreaker"} {...others} />);
}

export default Component;
