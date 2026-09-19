import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6-vpyb8c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f6-vpyb8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:gift-box-outline"} {...others} />);
}

export default Component;
