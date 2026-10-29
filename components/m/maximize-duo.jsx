import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vw2d3v36t.css';
import '../../css/p/p3_r2hr6d.css';
import '../../css/z/z2cmsqfjo.css';
import '../../css/b/b12zfebmf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vw2d3v36t"/><path class="p3_r2hr6d wm-a"/><path class="z2cmsqfjo"/><path class="b12zfebmf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:maximize-duo"} {...others} />);
}

export default Component;
