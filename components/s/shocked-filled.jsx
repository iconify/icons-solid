import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jplmjqxqf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jplmjqxqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:shocked-filled"} {...others} />);
}

export default Component;
