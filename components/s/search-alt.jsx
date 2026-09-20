import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc8bcyg6a.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bc8bcyg6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:search-alt"} {...others} />);
}

export default Component;
