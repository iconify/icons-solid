import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipzj944da.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ipzj944da"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:camera-photo-solid"} {...others} />);
}

export default Component;
