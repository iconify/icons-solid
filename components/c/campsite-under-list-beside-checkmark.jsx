import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-id9i7nx.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="j-id9i7nx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:campsite-under-list-beside-checkmark"} {...others} />);
}

export default Component;
