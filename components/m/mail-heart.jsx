import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iuv2f0bhk.css';
import '../../css/h/hks9l4goj.css';
import '../../css/p/p3odo28qp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iuv2f0bhk"/><path class="hks9l4goj"/><path class="p3odo28qp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-heart"} {...others} />);
}

export default Component;
