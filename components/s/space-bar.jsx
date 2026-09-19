import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykrxfx-4u.css';

const viewBox = {"width":344,"height":384};
const content = `<path class="ykrxfx-4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:space-bar"} {...others} />);
}

export default Component;
