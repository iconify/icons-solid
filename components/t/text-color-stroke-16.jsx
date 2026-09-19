import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3hqbzbrl.css';
import '../../css/g/ge50lacpt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="b3hqbzbrl"/><path class="ge50lacpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:text-color-stroke-16"} {...others} />);
}

export default Component;
