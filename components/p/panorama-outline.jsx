import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxlnc7bss.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qxlnc7bss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panorama-outline"} {...others} />);
}

export default Component;
