import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ere8b8b-s.css';
import '../../css/s/su2ci-bpz.css';
import '../../css/q/qyvbf9bgl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ere8b8b-s"/><path class="su2ci-bpz"/><path class="qyvbf9bgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:zimaos"} {...others} />);
}

export default Component;
