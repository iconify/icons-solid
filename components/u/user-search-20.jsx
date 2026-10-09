import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sd353pbda.css';
import '../../css/a/ad6ngxjuf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sd353pbda"/><path class="ad6ngxjuf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:user-search-20"} {...others} />);
}

export default Component;
