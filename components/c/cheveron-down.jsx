import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/khu0vob1r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="khu0vob1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:cheveron-down"} {...others} />);
}

export default Component;
