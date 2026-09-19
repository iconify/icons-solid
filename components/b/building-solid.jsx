import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7tx4gznz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w7tx4gznz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:building-solid"} {...others} />);
}

export default Component;
