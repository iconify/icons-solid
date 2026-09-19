import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lp44fybpq.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="lp44fybpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:window-20-solid"} {...others} />);
}

export default Component;
