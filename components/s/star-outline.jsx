import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ee-9a1ddt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ee-9a1ddt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gridicons:star-outline"} {...others} />);
}

export default Component;
