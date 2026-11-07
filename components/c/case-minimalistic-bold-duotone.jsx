import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydbsjp0mn.css';
import '../../css/u/uv9075bbf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ydbsjp0mn"/><path class="uv9075bbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:case-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
