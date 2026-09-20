import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgu1592no.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="zgu1592no"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:inbox-tray-2"} {...others} />);
}

export default Component;
