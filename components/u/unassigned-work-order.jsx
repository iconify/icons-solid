import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/stiiw_f7b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="stiiw_f7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:unassigned-work-order"} {...others} />);
}

export default Component;
