import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r__f3wn0s.css';
import '../../css/t/tpa5nbb8v.css';
import '../../css/l/lcnzvy4sv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r__f3wn0s"/><path class="tpa5nbb8v"/><path class="lcnzvy4sv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-case-open-bold-duotone"} {...others} />);
}

export default Component;
