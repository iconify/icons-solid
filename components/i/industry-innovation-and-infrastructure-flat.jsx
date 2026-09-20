import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zxvqckbjd.css';
import '../../css/n/nmjdbw-cz.css';
import '../../css/m/mh0tmlz2k.css';
import '../../css/u/u108nsb5e.css';
import '../../css/y/y2lumwb0x.css';
import '../../css/x/x4dyvhbug.css';
import '../../css/j/jn8cxnbwl.css';
import '../../css/x/x_p0u8phr.css';
import '../../css/b/bg52zoixa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="zxvqckbjd"/><path class="nmjdbw-cz"/><path class="mh0tmlz2k"/><path class="u108nsb5e"/><path class="y2lumwb0x"/><path class="x4dyvhbug"/><path class="jn8cxnbwl"/><path class="x_p0u8phr"/><path class="bg52zoixa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:industry-innovation-and-infrastructure-flat"} {...others} />);
}

export default Component;
