import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erhfpqflh.css';
import '../../css/r/r8c016bvp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="erhfpqflh"/><path class="r8c016bvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:filter-close-outline"} {...others} />);
}

export default Component;
