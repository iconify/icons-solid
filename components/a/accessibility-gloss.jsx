import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fsy5oy3nc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fsy5oy3nc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:accessibility-gloss"} {...others} />);
}

export default Component;
