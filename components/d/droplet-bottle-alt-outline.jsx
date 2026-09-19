import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dub6k1bkl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dub6k1bkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:droplet-bottle-alt-outline"} {...others} />);
}

export default Component;
