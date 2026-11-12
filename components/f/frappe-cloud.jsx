import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4_kwrboz.css';
import '../../css/o/oa0cpabtz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d4_kwrboz"/><path class="oa0cpabtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:frappe-cloud"} {...others} />);
}

export default Component;
