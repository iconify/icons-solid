import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ghjqc8bag.css';
import '../../css/i/ig7og-50b.css';
import '../../css/y/yxtbk0bmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ghjqc8bag"/><path class="ig7og-50b"/><path class="yxtbk0bmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:weight-scale"} {...others} />);
}

export default Component;
