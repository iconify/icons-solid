import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x6-u63tpe.css';
import '../../css/s/s-f1sxbzj.css';
import '../../css/n/ngw05cc0t.css';
import '../../css/i/ijey5tl3d.css';
import '../../css/u/uebyq5hhe.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x6-u63tpe"/><path clip-rule="evenodd" class="s-f1sxbzj"/><path class="ngw05cc0t"/><path class="ijey5tl3d"/><path clip-rule="evenodd" class="uebyq5hhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:ag"} {...others} />);
}

export default Component;
