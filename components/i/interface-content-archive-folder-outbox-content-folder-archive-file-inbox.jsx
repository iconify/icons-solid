import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqha5oyiz.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="oqha5oyiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-content-archive-folder-outbox-content-folder-archive-file-inbox"} {...others} />);
}

export default Component;
