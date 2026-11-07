import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nb1w2tbur.css';
import '../../css/e/ejx2y1bzf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nb1w2tbur"/><path class="ejx2y1bzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-snowfall-bold-duotone"} {...others} />);
}

export default Component;
