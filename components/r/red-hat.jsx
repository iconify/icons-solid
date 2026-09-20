import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0x3uhbzd.css';
import '../../css/l/lo8henb7b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g0x3uhbzd"/><path class="lo8henb7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:red-hat"} {...others} />);
}

export default Component;
