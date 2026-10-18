import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9n5x7btr.css';
import '../../css/e/e9it5tbme.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k9n5x7btr"/><path class="e9it5tbme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ufh-manifold-20"} {...others} />);
}

export default Component;
