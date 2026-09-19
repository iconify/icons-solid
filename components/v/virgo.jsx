import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/we9xwhb4l.css';
import '../../css/r/r6u96spbg.css';
import '../../css/a/ac-5uy-ae.css';
import '../../css/t/tg22mqbac.css';
import '../../css/p/p29ib2bhh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="we9xwhb4l"/><path class="r6u96spbg"/><path class="ac-5uy-ae"/><path class="tg22mqbac"/><path class="p29ib2bhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:virgo"} {...others} />);
}

export default Component;
