import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycy_c2baw.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ycy_c2baw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:paperclip-1-remix"} {...others} />);
}

export default Component;
