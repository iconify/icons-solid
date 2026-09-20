import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wloo1rwde.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wloo1rwde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:tailwind-css-line"} {...others} />);
}

export default Component;
