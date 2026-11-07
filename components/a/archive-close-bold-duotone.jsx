import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3l80h-5o.css';
import '../../css/l/l01_od4ep.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i3l80h-5o"/><path clip-rule="evenodd" class="l01_od4ep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-close-bold-duotone"} {...others} />);
}

export default Component;
