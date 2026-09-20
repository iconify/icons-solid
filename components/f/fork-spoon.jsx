import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r7pkn6g-i.css';
import '../../css/m/mkfx32b2a.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="r7pkn6g-i"/><path class="mkfx32b2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:fork-spoon"} {...others} />);
}

export default Component;
