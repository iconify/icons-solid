import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mumuo9s8g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mumuo9s8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folder-search-gloss"} {...others} />);
}

export default Component;
