import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6vtb6xsl.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="w6vtb6xsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:chicken-grilled-stream-remix"} {...others} />);
}

export default Component;
