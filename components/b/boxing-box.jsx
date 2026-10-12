import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1yritb1r.css';
import '../../css/y/ynr4168sm.css';
import '../../css/y/y7jpj5biz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l1yritb1r"/><path class="ynr4168sm"/><path class="y7jpj5biz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:boxing-box"} {...others} />);
}

export default Component;
