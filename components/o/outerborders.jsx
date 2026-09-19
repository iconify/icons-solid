import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1fqgkbxt.css';

const viewBox = {"width":960,"height":960};
const content = `<path class="j1fqgkbxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:outerborders"} {...others} />);
}

export default Component;
