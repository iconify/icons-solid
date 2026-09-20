import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jeoamabzd.css';
import '../../css/l/lg5pgsbvs.css';
import '../../css/p/p7dev2b4l.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/q/qlya7fs1p.css';
import '../../css/c/crjv8jb-d.css';
import '../../css/d/d-hcfeoxn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jeoamabzd"/><path class="lg5pgsbvs"/><path clip-rule="evenodd" class="p7dev2b4l"/><g class="p_3zmsvya"><path class="qlya7fs1p"/><path clip-rule="evenodd" class="crjv8jb-d"/></g><path class="d-hcfeoxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:user-circle"} {...others} />);
}

export default Component;
