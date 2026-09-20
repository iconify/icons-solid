import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/b/bdntgfxjm.css';
import '../../css/u/ufjhxs-th.css';
import '../../css/z/zu4hk2b5n.css';
import '../../css/d/dhwjdc46i.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="bdntgfxjm"/><path class="ufjhxs-th"/><path class="zu4hk2b5n"/><path class="dhwjdc46i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:compass-1"} {...others} />);
}

export default Component;
