import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v5-b18bqd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v5-b18bqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:music-note-heart"} {...others} />);
}

export default Component;
