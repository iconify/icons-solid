import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ou-5-d57b.css';
import '../../css/d/dup4p44-i.css';
import '../../css/i/i2wlq_bts.css';
import '../../css/o/ocmk4xbkd.css';
import '../../css/k/kppacszrr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ou-5-d57b"/><path clip-rule="evenodd" class="dup4p44-i"/><path class="i2wlq_bts"/><path class="ocmk4xbkd"/><path class="kppacszrr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bill-1"} {...others} />);
}

export default Component;
