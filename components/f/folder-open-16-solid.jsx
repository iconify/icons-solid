import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6vko2bzb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w6vko2bzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:folder-open-16-solid"} {...others} />);
}

export default Component;
