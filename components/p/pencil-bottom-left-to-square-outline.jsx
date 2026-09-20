import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6flzy-3l.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="j6flzy-3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pencil-bottom-left-to-square-outline"} {...others} />);
}

export default Component;
