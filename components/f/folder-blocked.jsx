import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bf4v0abcn.css';
import '../../css/g/gmj67c7jw.css';
import '../../css/m/mgo8kyexx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bf4v0abcn"/><path class="gmj67c7jw"/><path class="mgo8kyexx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:folder-blocked"} {...others} />);
}

export default Component;
