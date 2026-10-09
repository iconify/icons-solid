import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lhczfhb2e.css';
import '../../css/c/clf6f0bwy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lhczfhb2e"/><path class="clf6f0bwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:trending-down-20"} {...others} />);
}

export default Component;
