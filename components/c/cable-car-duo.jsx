import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xqe516b6x.css';
import '../../css/y/yiybe9akw.css';
import '../../css/j/j-1dstvth.css';
import '../../css/v/vx029jwzp.css';
import '../../css/y/y0r4ni03n.css';
import '../../css/v/vnk7macbu.css';
import '../../css/t/tg6q0hhbn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="xqe516b6x"/><path class="yiybe9akw"/><path class="j-1dstvth"/><path class="vx029jwzp"/><path class="y0r4ni03n"/><path class="vnk7macbu"/><path class="tg6q0hhbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:cable-car-duo"} {...others} />);
}

export default Component;
