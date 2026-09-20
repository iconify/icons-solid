import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w33ly4b3u.css';
import '../../css/j/jpdi6m16w.css';
import '../../css/b/byj6lkwkk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w33ly4b3u"/><path class="jpdi6m16w"/><path class="byj6lkwkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:medical-cross"} {...others} />);
}

export default Component;
