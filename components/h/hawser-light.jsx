import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpju4jbvx.css';
import '../../css/t/tqpmf_bni.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tpju4jbvx"/><path class="tqpmf_bni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hawser-light"} {...others} />);
}

export default Component;
