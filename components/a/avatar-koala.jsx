import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yiepiybzz.css';
import '../../css/z/zy-w-3bxd.css';
import '../../css/w/wd1m07-2i.css';
import '../../css/h/hbvnoacll.css';
import '../../css/u/uxytj4b6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k yiepiybzz"/><path class="wm-k zy-w-3bxd"/><path class="wd1m07-2i wm-a"/><path class="hbvnoacll wm-a"/><path class="uxytj4b6z wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:avatar-koala"} {...others} />);
}

export default Component;
