import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-rfwcb2x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h-rfwcb2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:fish-outline"} {...others} />);
}

export default Component;
