import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iln029b4a.css';
import '../../css/t/twczvmatf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="iln029b4a"/><path class="twczvmatf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panorama-bold-duotone"} {...others} />);
}

export default Component;
