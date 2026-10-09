import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5e0hoqob.css';
import '../../css/x/x1tzk_mhq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e5e0hoqob"/><path class="x1tzk_mhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bathtub-20-bold"} {...others} />);
}

export default Component;
