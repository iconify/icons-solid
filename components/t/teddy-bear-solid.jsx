import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mk41io1ew.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mk41io1ew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:teddy-bear-solid"} {...others} />);
}

export default Component;
