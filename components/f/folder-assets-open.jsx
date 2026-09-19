import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtmerfb1q.css';
import '../../css/f/fig7n4w6p.css';
import '../../css/u/utvn67bmq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jtmerfb1q"/><path class="fig7n4w6p"/><path class="utvn67bmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-assets-open"} {...others} />);
}

export default Component;
