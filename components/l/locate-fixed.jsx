import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lt-tm7l0c.css';
import '../../css/p/p-njznblk.css';
import '../../css/u/umahcf75g.css';
import '../../css/r/r8jsswd-a.css';
import '../../css/w/w2l5azv7t.css';
import '../../css/h/h4lk3hbvk.css';
import '../../css/e/eq23-ts-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lt-tm7l0c wm-shadow"/><path class="p-njznblk wm-shadow"/><path class="umahcf75g"/><path class="r8jsswd-a"/><path class="w2l5azv7t"/><path class="h4lk3hbvk"/><path class="eq23-ts-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:locate-fixed"} {...others} />);
}

export default Component;
