import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tgnha726h.css';
import '../../css/z/zhef83wqk.css';
import '../../css/z/zuvme35ny.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tgnha726h"/><path class="zhef83wqk"/><path class="zuvme35ny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-kpaste-dark"} {...others} />);
}

export default Component;
