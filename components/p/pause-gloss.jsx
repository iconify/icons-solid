import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0dz9vbag.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c0dz9vbag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pause-gloss"} {...others} />);
}

export default Component;
