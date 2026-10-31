import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7v2a1bxw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i7v2a1bxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:youtube-round"} {...others} />);
}

export default Component;
