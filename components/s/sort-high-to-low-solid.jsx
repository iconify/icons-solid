import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gh-4jo2tm.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="gh-4jo2tm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:sort-high-to-low-solid"} {...others} />);
}

export default Component;
