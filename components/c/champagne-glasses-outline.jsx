import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tf603ubza.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tf603ubza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:champagne-glasses-outline"} {...others} />);
}

export default Component;
