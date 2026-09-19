import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/b/bj-pxl6bp.css';
import '../../css/u/uue630blk.css';
import '../../css/p/pm7666zog.css';
import '../../css/g/g5y4hzclc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="bj-pxl6bp"/><path class="uue630blk"/><path class="pm7666zog"/><path class="g5y4hzclc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bottle-one"} {...others} />);
}

export default Component;
