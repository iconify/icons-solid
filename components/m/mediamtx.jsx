import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny8rlnbhx.css';
import '../../css/o/o684edcxc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ny8rlnbhx"/><path class="o684edcxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mediamtx"} {...others} />);
}

export default Component;
