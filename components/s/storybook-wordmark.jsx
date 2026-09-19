import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rj-i8dbss.css';
import '../../css/w/w8x7sqqrp.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rj-i8dbss"/><path class="w8x7sqqrp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:storybook-wordmark"} {...others} />);
}

export default Component;
