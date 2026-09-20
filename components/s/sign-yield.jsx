import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ji2x0zbzx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ji2x0zbzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:sign-yield"} {...others} />);
}

export default Component;
