import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9_1nzbyt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="n9_1nzbyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:list-ordered"} {...others} />);
}

export default Component;
