import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhqdajy5l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bhqdajy5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:arrow-up-from-bracket-outline"} {...others} />);
}

export default Component;
