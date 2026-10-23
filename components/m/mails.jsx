import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ng44pd0kk.css';
import '../../css/s/s2k1ilb9r.css';
import '../../css/r/rsu45zejk.css';
import '../../css/n/n5-xw5utp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ng44pd0kk"/><rect class="s2k1ilb9r"/><path class="rsu45zejk"/><path class="n5-xw5utp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mails"} {...others} />);
}

export default Component;
