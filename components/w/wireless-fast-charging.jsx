import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u3s1jy8ea.css';
import '../../css/a/aybk0bbbx.css';
import '../../css/r/ryorw4bkl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="u3s1jy8ea"/><path class="aybk0bbbx"/><path class="ryorw4bkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:wireless-fast-charging"} {...others} />);
}

export default Component;
