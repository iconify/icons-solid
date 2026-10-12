import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/frwvbckoo.css';
import '../../css/f/forx9ld3b.css';
import '../../css/o/okvzs9bzz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="frwvbckoo"/><path class="forx9ld3b"/><path class="okvzs9bzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:glass-water"} {...others} />);
}

export default Component;
