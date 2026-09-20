import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6cjc0bct.css';
import '../../css/y/yeqdc6tqx.css';
import '../../css/s/sl3kvfb0b.css';
import '../../css/n/nis4xpbpc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v6cjc0bct"/><g class="yeqdc6tqx"><path class="sl3kvfb0b"/><path class="nis4xpbpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-eslint"} {...others} />);
}

export default Component;
