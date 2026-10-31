import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2-n-e3ej.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v2-n-e3ej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:link-horizontal-off-duotone-round"} {...others} />);
}

export default Component;
