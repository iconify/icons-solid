import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tx2k_ybxi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tx2k_ybxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:list-solid"} {...others} />);
}

export default Component;
