import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwp6cxbin.css';
import '../../css/t/t5vikhbba.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nwp6cxbin"/><path class="t5vikhbba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pogocache"} {...others} />);
}

export default Component;
