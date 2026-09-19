import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vu0f6vbvm.css';

const viewBox = {"width":344,"height":384};
const content = `<path class="vu0f6vbvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:arrow-back"} {...others} />);
}

export default Component;
