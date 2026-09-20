import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/l/let6yl3zn.css';
import '../../css/k/k4zt1db7t.css';
import '../../css/p/p8mmaebvw.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="let6yl3zn"/><path class="k4zt1db7t"/><path class="p8mmaebvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:wrench"} {...others} />);
}

export default Component;
