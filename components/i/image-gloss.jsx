import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vrxsc7bkl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vrxsc7bkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:image-gloss"} {...others} />);
}

export default Component;
