import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x82r1cpjn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x82r1cpjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:text-color-duotone-round"} {...others} />);
}

export default Component;
