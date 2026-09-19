import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lt43qwwoy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lt43qwwoy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:no-entry"} {...others} />);
}

export default Component;
