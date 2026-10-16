import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dyx4-sbij.css';
import '../../css/r/rcdfnub0v.css';
import '../../css/a/ak0vj3_wn.css';
import '../../css/d/d35byld4h.css';
import '../../css/l/layqtnb5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dyx4-sbij"/><rect class="rcdfnub0v"/><path class="ak0vj3_wn"/><path class="d35byld4h"/><path class="layqtnb5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-pc-cloud"} {...others} />);
}

export default Component;
