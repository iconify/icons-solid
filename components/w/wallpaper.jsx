import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/anoa0jxgg.css';
import '../../css/l/l9emq0bei.css';
import '../../css/f/f3dyhybkc.css';
import '../../css/b/btehxnnlo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="anoa0jxgg"/><rect class="l9emq0bei"/><path class="f3dyhybkc"/><path class="btehxnnlo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:wallpaper"} {...others} />);
}

export default Component;
