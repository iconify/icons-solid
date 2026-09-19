import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2so5n4so.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s2so5n4so"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:shield-check-outline"} {...others} />);
}

export default Component;
