import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rl-c-h5mx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rl-c-h5mx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:megaphone-solid"} {...others} />);
}

export default Component;
