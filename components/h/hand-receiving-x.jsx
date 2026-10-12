import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rq42i00ls.css';
import '../../css/u/umzkv9zji.css';
import '../../css/p/pkqaggb0i.css';
import '../../css/g/gjn9iyg8t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rq42i00ls"/><rect class="umzkv9zji"/><path class="pkqaggb0i"/><rect class="gjn9iyg8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hand-receiving-x"} {...others} />);
}

export default Component;
