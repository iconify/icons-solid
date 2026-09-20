import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzxu6cbem.css';
import '../../css/l/l5bgdtbpm.css';
import '../../css/t/t9nocfb7t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gzxu6cbem"/><path class="l5bgdtbpm"/><path class="t9nocfb7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-onedrive-dark"} {...others} />);
}

export default Component;
