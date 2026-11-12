import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqhne00dm.css';
import '../../css/o/osppluy1u.css';
import '../../css/n/nlzj7hb0x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qqhne00dm"/><path class="osppluy1u"/><path class="nlzj7hb0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:langfuse-light"} {...others} />);
}

export default Component;
