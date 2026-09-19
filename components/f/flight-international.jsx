import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o786i_bpn.css';
import '../../css/w/w_5dyix0s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="o786i_bpn"/><path class="w_5dyix0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:flight-international"} {...others} />);
}

export default Component;
