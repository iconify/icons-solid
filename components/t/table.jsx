import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xgqpmthnz.css';
import '../../css/h/hm6mu1nui.css';
import '../../css/s/sv0fa0hys.css';
import '../../css/b/bjvzyaclt.css';
import '../../css/d/dcd1kpbbp.css';
import '../../css/w/w1tfehbym.css';
import '../../css/c/c_phgub1x.css';
import '../../css/z/z56ckyb3t.css';
import '../../css/z/zb00vac5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow xgqpmthnz"/><path class="hm6mu1nui"/><path class="sv0fa0hys"/><path class="bjvzyaclt"/><path class="dcd1kpbbp"/><path class="w1tfehbym"/><path class="c_phgub1x"/><path class="z56ckyb3t"/><path class="wm-shine zb00vac5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:table"} {...others} />);
}

export default Component;
