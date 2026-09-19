import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f44j1yhyl.css';
import '../../css/u/ufjq7nq1l.css';
import '../../css/b/b79sxlbmk.css';
import '../../css/l/lnkhax4gl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><ellipse class="f44j1yhyl"/><ellipse class="ufjq7nq1l"/><path class="b79sxlbmk"/><ellipse class="lnkhax4gl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:face-powder"} {...others} />);
}

export default Component;
