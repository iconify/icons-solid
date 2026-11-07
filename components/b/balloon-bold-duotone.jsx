import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/t/tsddqxbdo.css';
import '../../css/k/k7u1xrbtl.css';
import '../../css/h/hj2yjwnmt.css';
import '../../css/h/h85y5vu-x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="tsddqxbdo"/><path class="k7u1xrbtl"/></g><path class="hj2yjwnmt"/><path class="h85y5vu-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:balloon-bold-duotone"} {...others} />);
}

export default Component;
