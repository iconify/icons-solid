import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fll4_tu9k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fll4_tu9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:battery-full-line"} {...others} />);
}

export default Component;
