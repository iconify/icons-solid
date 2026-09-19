import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kb6q_vbqk.css';
import '../../css/w/woqq12bcn.css';
import '../../css/x/xw6lx3wlw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="kb6q_vbqk"/><path class="woqq12bcn"/><path class="xw6lx3wlw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:clothes-windbreaker"} {...others} />);
}

export default Component;
