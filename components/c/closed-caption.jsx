import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4m5ftbzx.css';

const viewBox = {"width":384,"height":384};
const content = `<path class="u4m5ftbzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:closed-caption"} {...others} />);
}

export default Component;
