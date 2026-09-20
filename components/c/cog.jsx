import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v18eeusxr.css';
import '../../css/z/z0wnkc8ia.css';
import '../../css/m/mmahekb9d.css';
import '../../css/p/pu-gypbfb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="v18eeusxr"/><path class="z0wnkc8ia"/><path class="mmahekb9d"/><path class="pu-gypbfb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:cog"} {...others} />);
}

export default Component;
