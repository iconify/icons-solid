import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dj_w5bbqt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dj_w5bbqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:moon-16-solid"} {...others} />);
}

export default Component;
