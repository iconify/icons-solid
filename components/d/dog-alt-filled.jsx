import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ice-8pbwl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ice-8pbwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dog-alt-filled"} {...others} />);
}

export default Component;
