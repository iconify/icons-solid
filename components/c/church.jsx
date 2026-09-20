import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvyrs3l7w.css';
import '../../css/z/zblh9ubrd.css';
import '../../css/y/y2xgks76o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mvyrs3l7w"/><path class="zblh9ubrd"/><path class="y2xgks76o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:church"} {...others} />);
}

export default Component;
