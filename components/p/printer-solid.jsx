import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in1ns9bcp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="in1ns9bcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:printer-solid"} {...others} />);
}

export default Component;
