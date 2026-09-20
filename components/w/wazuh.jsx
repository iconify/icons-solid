import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/he3q-t8yh.css';
import '../../css/a/atcx61-tl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="he3q-t8yh"/><circle class="atcx61-tl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wazuh"} {...others} />);
}

export default Component;
