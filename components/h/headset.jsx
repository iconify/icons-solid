import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wkhnd7b5a.css';
import '../../css/o/oybf8rw1o.css';
import '../../css/g/gzy1edjps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wkhnd7b5a"/><path class="oybf8rw1o"/><path class="gzy1edjps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:headset"} {...others} />);
}

export default Component;
