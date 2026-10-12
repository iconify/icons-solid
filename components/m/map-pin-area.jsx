import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pq9j02r9p.css';
import '../../css/d/dp_cy5b7g.css';
import '../../css/d/d3b9asbmq.css';
import '../../css/t/t04kq5blt.css';
import '../../css/e/eno3n2osn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pq9j02r9p"/><path class="dp_cy5b7g"/><path clip-rule="evenodd" class="d3b9asbmq"/><path class="t04kq5blt"/><circle transform="rotate(90 12 7.51)" class="eno3n2osn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:map-pin-area"} {...others} />);
}

export default Component;
