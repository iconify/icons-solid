import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/m/mo3r0eb0r.css';
import '../../css/p/phreexrfl.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="mo3r0eb0r"/><path class="phreexrfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:love"} {...others} />);
}

export default Component;
