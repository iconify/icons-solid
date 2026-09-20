import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zbx2-lbrj.css';
import '../../css/s/snmgkdbll.css';
import '../../css/w/w0zsz-bgq.css';
import '../../css/s/sonlh6bds.css';
import '../../css/l/lyk137b9s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zbx2-lbrj"/><path class="snmgkdbll"/><path class="w0zsz-bgq"/><path class="sonlh6bds"/><path class="lyk137b9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:tablet"} {...others} />);
}

export default Component;
