import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/em1uhysbp.css';
import '../../css/w/wp14jkbxl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="em1uhysbp"/><path class="wp14jkbxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:domain-watchdog-light"} {...others} />);
}

export default Component;
