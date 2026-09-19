import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bz0vkbces.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bz0vkbces"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:wallet-16-solid"} {...others} />);
}

export default Component;
