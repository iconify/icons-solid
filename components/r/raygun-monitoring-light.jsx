import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqsidac3y.css';
import '../../css/x/x9m8ihb_s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yqsidac3y"/><path class="x9m8ihb_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:raygun-monitoring-light"} {...others} />);
}

export default Component;
