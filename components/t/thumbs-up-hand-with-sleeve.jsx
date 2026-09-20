import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmjtdybdl.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wmjtdybdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:thumbs-up-hand-with-sleeve"} {...others} />);
}

export default Component;
