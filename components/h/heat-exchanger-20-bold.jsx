import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewxalfyww.css';
import '../../css/j/jxwwvvbjb.css';
import '../../css/t/tp0bwlbkf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ewxalfyww"/><path class="jxwwvvbjb"/><path class="tp0bwlbkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-exchanger-20-bold"} {...others} />);
}

export default Component;
