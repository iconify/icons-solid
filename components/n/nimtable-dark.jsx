import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdyn042hz.css';
import '../../css/l/lopv05qtm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wdyn042hz"/><path class="lopv05qtm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nimtable-dark"} {...others} />);
}

export default Component;
