import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjc7l4brv.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="tjc7l4brv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:report-general"} {...others} />);
}

export default Component;
