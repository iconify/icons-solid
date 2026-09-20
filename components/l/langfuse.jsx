import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq6qj3b9f.css';
import '../../css/g/g0pwxi3zt.css';
import '../../css/t/ty23m0b9o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wq6qj3b9f"/><path class="g0pwxi3zt"/><path class="ty23m0b9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:langfuse"} {...others} />);
}

export default Component;
