import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/armr2rj6m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="armr2rj6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:forward-solid"} {...others} />);
}

export default Component;
