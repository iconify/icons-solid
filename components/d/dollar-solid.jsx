import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hd34weaop.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hd34weaop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:dollar-solid"} {...others} />);
}

export default Component;
