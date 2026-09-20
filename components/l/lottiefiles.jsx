import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-3qzwbmz.css';
import '../../css/b/b48b5ubwt.css';

const viewBox = {"width":81,"height":81};
const content = `<g class="ft5dv1b6b"><path class="y-3qzwbmz"/><path class="b48b5ubwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:lottiefiles"} {...others} />);
}

export default Component;
