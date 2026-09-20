import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-vkctb7t.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="r-vkctb7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:voice-scan-2-remix"} {...others} />);
}

export default Component;
