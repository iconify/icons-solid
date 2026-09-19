import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4tk9mluw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="e4tk9mluw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:cross-in-square"} {...others} />);
}

export default Component;
