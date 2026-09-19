import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/kdrahjc2j.css';
import '../../css/n/nqwox05ys.css';
import '../../css/l/l_eobbc0g.css';
import '../../css/v/vblc21c9i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="kdrahjc2j"/><path class="nqwox05ys"/><path class="l_eobbc0g"/><path class="vblc21c9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:piggy-bank"} {...others} />);
}

export default Component;
