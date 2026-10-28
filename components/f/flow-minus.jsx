import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bepp79b9p.css';
import '../../css/g/gflj47boh.css';
import '../../css/g/gtrbizr6q.css';
import '../../css/d/du1x3tbgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bepp79b9p"/><path class="gflj47boh"/><circle class="gtrbizr6q"/><path class="du1x3tbgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:flow-minus"} {...others} />);
}

export default Component;
