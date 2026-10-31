import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1lht_bqn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u1lht_bqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-audio-gloss"} {...others} />);
}

export default Component;
