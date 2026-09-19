import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5h3u4r9w.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="t5h3u4r9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:phone-call-transfer-only-stroke-12"} {...others} />);
}

export default Component;
