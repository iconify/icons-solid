import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lhehwf5ki.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lhehwf5ki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:sms-6"} {...others} />);
}

export default Component;
