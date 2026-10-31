import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbgj9ebag.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kbgj9ebag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:microscope-gloss"} {...others} />);
}

export default Component;
