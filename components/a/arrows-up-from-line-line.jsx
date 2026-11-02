import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yubdtabdg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yubdtabdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:arrows-up-from-line-line"} {...others} />);
}

export default Component;
