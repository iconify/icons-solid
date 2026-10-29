import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/ex8lrup2k.css';
import '../../css/r/rhnsbwb-m.css';
import '../../css/n/nwncmym7l.css';
import '../../css/l/lntbq-b3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ex8lrup2k wm-deco"/><path class="rhnsbwb-m wm-deco"/><path class="nwncmym7l"/><path class="lntbq-b3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ticket-blueprint"} {...others} />);
}

export default Component;
