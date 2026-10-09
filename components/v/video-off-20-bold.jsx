import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xx0rv7bbf.css';
import '../../css/k/khdf871ad.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xx0rv7bbf"/><path class="khdf871ad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:video-off-20-bold"} {...others} />);
}

export default Component;
