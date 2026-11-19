import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dq14sv5uy.css';
import '../../css/g/gg0fabcgo.css';
import '../../css/i/iqbw1sbec.css';
import '../../css/b/bf51pnblt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dq14sv5uy"/><path class="gg0fabcgo"/><path clip-rule="evenodd" class="iqbw1sbec"/><path class="bf51pnblt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sleep"} {...others} />);
}

export default Component;
