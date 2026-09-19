import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eh_8zbb3r.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="eh_8zbb3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:map-pin-alt-solid"} {...others} />);
}

export default Component;
