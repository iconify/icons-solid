import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ce_od5b1h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ce_od5b1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:column-solid"} {...others} />);
}

export default Component;
