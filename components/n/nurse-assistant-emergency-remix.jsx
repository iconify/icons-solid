import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wap2w4btr.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="wap2w4btr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:nurse-assistant-emergency-remix"} {...others} />);
}

export default Component;
