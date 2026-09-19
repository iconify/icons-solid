import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ac7du0n2m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ac7du0n2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:chevron-double-down-outline"} {...others} />);
}

export default Component;
