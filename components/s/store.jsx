import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pha_2htwp.css';
import '../../css/b/bp3fv6boz.css';
import '../../css/s/sc6wphleq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pha_2htwp"/><path class="bp3fv6boz"/><path class="sc6wphleq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:store"} {...others} />);
}

export default Component;
