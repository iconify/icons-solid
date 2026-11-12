import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pi7f4wb8o.css';
import '../../css/g/gbm6d6bzt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pi7f4wb8o"/><path class="gbm6d6bzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mozilla-monitor-light"} {...others} />);
}

export default Component;
