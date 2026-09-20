import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ed9y2pb3q.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ed9y2pb3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:shopping-cart"} {...others} />);
}

export default Component;
