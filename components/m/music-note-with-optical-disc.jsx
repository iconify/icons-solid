import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sz152z8so.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="sz152z8so"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:music-note-with-optical-disc"} {...others} />);
}

export default Component;
