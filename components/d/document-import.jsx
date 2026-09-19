import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cantnxqek.css';
import '../../css/a/aodxntc9w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cantnxqek"/><path class="aodxntc9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document-import"} {...others} />);
}

export default Component;
