import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwh6emb2x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kwh6emb2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:surround-sound-3-1"} {...others} />);
}

export default Component;
