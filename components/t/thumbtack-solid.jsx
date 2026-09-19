import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5n0-tron.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g5n0-tron"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:thumbtack-solid"} {...others} />);
}

export default Component;
