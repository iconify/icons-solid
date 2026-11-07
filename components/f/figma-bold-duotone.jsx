import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/v/vgnv5k5we.css';
import '../../css/e/e2iqnjbvb.css';
import '../../css/e/er0v85b1x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="vgnv5k5we"/><path class="e2iqnjbvb"/></g><path class="er0v85b1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:figma-bold-duotone"} {...others} />);
}

export default Component;
