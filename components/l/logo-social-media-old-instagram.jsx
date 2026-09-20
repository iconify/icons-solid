import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2plnobuh.css';
import '../../css/j/j7l5zubwl.css';
import '../../css/e/ev-42c_5h.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="s2plnobuh"/><path class="j7l5zubwl"/><path class="ev-42c_5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:logo-social-media-old-instagram"} {...others} />);
}

export default Component;
