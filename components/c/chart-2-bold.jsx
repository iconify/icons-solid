import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xex6rhb7e.css';
import '../../css/v/vi-jvfkhx.css';
import '../../css/g/gtm-d4bag.css';
import '../../css/b/b2tz_eb6x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xex6rhb7e"/><path class="vi-jvfkhx"/><path class="gtm-d4bag"/><path class="b2tz_eb6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chart-2-bold"} {...others} />);
}

export default Component;
