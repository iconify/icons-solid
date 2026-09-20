import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ni-v-ubcn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ni-v-ubcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bifold-map-with-dotted-line-to-x"} {...others} />);
}

export default Component;
