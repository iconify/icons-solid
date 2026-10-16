import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i8d2wjlyb.css';
import '../../css/y/ywvxbgb_y.css';
import '../../css/x/x8iphublh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i8d2wjlyb"/><path class="ywvxbgb_y"/><path class="x8iphublh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:warning-octagon"} {...others} />);
}

export default Component;
