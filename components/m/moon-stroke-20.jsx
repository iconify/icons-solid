import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kf5r4xb1f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kf5r4xb1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:moon-stroke-20"} {...others} />);
}

export default Component;
