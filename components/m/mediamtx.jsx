import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_nw8wixd.css';
import '../../css/o/o684edcxc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w_nw8wixd"/><path class="o684edcxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mediamtx"} {...others} />);
}

export default Component;
