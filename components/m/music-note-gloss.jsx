import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sej40yb-l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sej40yb-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:music-note-gloss"} {...others} />);
}

export default Component;
