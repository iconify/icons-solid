import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3f4miq6w.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="w3f4miq6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:upload-computer-remix"} {...others} />);
}

export default Component;
