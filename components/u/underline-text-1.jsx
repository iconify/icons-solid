import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ss_jp_aav.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ss_jp_aav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:underline-text-1"} {...others} />);
}

export default Component;
