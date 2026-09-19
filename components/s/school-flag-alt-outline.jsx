import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sicut5b7k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sicut5b7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:school-flag-alt-outline"} {...others} />);
}

export default Component;
