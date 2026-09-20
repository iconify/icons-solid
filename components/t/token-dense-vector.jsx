import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccg9vfo6m.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ccg9vfo6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:token-dense-vector"} {...others} />);
}

export default Component;
