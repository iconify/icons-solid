import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffyaq1wcl.css';
import '../../css/i/i-d09ab5o.css';
import '../../css/p/p7o_o6bnt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ffyaq1wcl"/><path class="i-d09ab5o"/><path class="p7o_o6bnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:settings-check"} {...others} />);
}

export default Component;
