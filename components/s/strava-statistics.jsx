import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g46yy7bor.css';
import '../../css/w/wdnbtobig.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="g46yy7bor"/><path class="wdnbtobig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:strava-statistics"} {...others} />);
}

export default Component;
