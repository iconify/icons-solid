import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/umzkv9zji.css';
import '../../css/w/wnk23tbno.css';
import '../../css/p/pkqaggb0i.css';
import '../../css/g/gjn9iyg8t.css';
import '../../css/y/y593d8bcl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="umzkv9zji"/><path class="wnk23tbno"/><path class="pkqaggb0i"/><rect class="gjn9iyg8t"/><path class="y593d8bcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hand-receiving-star"} {...others} />);
}

export default Component;
