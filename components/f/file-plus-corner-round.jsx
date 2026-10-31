import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rc2cd4bto.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rc2cd4bto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:file-plus-corner-round"} {...others} />);
}

export default Component;
