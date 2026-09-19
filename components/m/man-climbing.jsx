import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_nee0cyh.css';
import '../../css/k/kafmo0bpp.css';
import '../../css/l/lkpq_rbdh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j_nee0cyh"/><path class="kafmo0bpp"/><path class="lkpq_rbdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-climbing"} {...others} />);
}

export default Component;
