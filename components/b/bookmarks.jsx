import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cpdmdrvgj.css';
import '../../css/z/znf3e2q-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cpdmdrvgj"/><path class="znf3e2q-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bookmarks"} {...others} />);
}

export default Component;
